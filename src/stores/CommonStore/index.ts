// import * as API from 'api/common';
import { getStorage, persistStorage } from 'stores/utils';

import { ICommonStore } from './types';
export * from './types';

const isLightKey = 'isLight';

export const CommonStore = (): ICommonStore => {
    const storageTheme = getStorage(isLightKey);

    return {
        isLight: !!storageTheme ? storageTheme === 'true' : false,
        isMenuOpen: false,

        toggleTheme() {
            this.isLight = !this.isLight;

            persistStorage(isLightKey, this.isLight.toString());
        },

        setMenuOpen(bool) {
            this.isMenuOpen = bool;
        },

        // async getAssetsRates() {
        //     try {
        //         const res = await API.getRates();

        //         if (res.data) {
        //             const formatedRates: Record<string, string> = {};

        //             for (const key in res.data) {
        //                 formatedRates[key] = res.data[key].rate;
        //             }

        //             runInAction(() => {
        //                 this.assetsRates = formatedRates;
        //             });
        //         }
        //     } catch (error) {
        //         // TODO: take other
        //         console.error(error as Error);
        //     }
        // },
    };
};
