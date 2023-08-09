import React, { createContext, FC, ReactNode } from 'react';
import { useLocalObservable } from 'mobx-react';

import { CommonStore, ICommonStore } from './CommonStore';

interface IStoreContext {
    commonStore: ICommonStore;
}

export const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const commonStore = useLocalObservable(CommonStore);

    const stores = {
        commonStore,
    };

    return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>;
};

export const useRootStore = () => {
    const rootStore = React.useContext(StoreContext);

    if (!rootStore) {
        throw new Error('useStore must be used within a StoreProvider');
    }

    return rootStore;
};
