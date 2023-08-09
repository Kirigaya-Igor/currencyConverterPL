import React, { FC } from 'react';
import { observer } from 'mobx-react';

import { Skeleton } from 'components/other';

import { useRootStore } from 'stores/initStore';

import * as T from './types';
import * as S from './units';

export const Chip: FC<T.IChip> = observer((props) => {
    const { commonStore } = useRootStore();

    return (
        <S.Wrapper isLight={commonStore.isLight} {...props}>
            {!!props.icon &&
                (typeof props.icon === 'string' ? (
                    <S.Icon
                        src={props.icon}
                        iconSize={props.styleSheame === 'oval' ? 'large' : props.iconSize}
                    />
                ) : (
                    <S.IconWrapper
                        iconSize={props.styleSheame === 'oval' ? 'large' : props.iconSize}
                    >
                        {props.icon}
                    </S.IconWrapper>
                ))}

            {props.children}
        </S.Wrapper>
    );
});

export const RadioIconChip: FC<T.IRadioIconChip> = (props) => {
    return (
        <S.RadioIconChip {...props}>
            {props.isLoading ? (
                <Skeleton width={28} height={28} circle />
            ) : (
                <>
                    {!!props.icon &&
                        (typeof props.icon === 'string' ? (
                            <S.Icon src={props.icon} iconSize="medium" />
                        ) : (
                            <S.IconWrapper iconSize="medium">{props.icon}</S.IconWrapper>
                        ))}
                </>
            )}
        </S.RadioIconChip>
    );
};
