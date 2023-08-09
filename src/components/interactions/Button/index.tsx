import React, { FC, forwardRef } from 'react';
import { observer } from 'mobx-react';

import { Loader } from 'components/core';

import { useRootStore } from 'stores/initStore';

import * as T from './types';
import * as S from './units';

export const Button = forwardRef<HTMLButtonElement, T.IButton>((props, ref) => {
    return (
        <S.Button size={props.size || 'normal'} {...props} ref={ref}>
            {props.isLoading ? (
                <Loader color="white" size={24} />
            ) : (
                <>
                    {props.icon && <S.Icon>{props.icon}</S.Icon>}

                    {props.children}
                </>
            )}
        </S.Button>
    );
});

export const CircleButton: FC<T.ICircleButton> = observer((props) => {
    const { commonStore } = useRootStore();

    return (
        <S.CircleButton {...props}>
            {props.isLoading ? (
                <Loader color={commonStore.isLight ? 'primary' : 'white'} size={16} />
            ) : (
                <>
                    {props.icon && <S.Icon>{props.icon}</S.Icon>}

                    {props.children}
                </>
            )}
        </S.CircleButton>
    );
});
