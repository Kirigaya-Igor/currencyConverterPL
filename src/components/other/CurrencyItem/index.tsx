import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { Language } from 'types/common';

import { useDeviceType } from 'hooks';
import { useRootStore } from 'stores/initStore';

import * as T from './types';
import * as S from './units';

export const CurrencyItem: FC<T.ICurrencyItem> = observer((props) => {
    const { commonStore } = useRootStore();

    const {
        i18n: { language },
    } = useTranslation();

    const { isMobile } = useDeviceType();

    const favoritesHandler = () => {
        if (commonStore.favoritesRates.some((item) => item.code === props.rate.code)) {
            commonStore.setFavoritesRates(
                commonStore.favoritesRates.filter((item) => item.code !== props.rate.code),
            );
        } else {
            commonStore.setFavoritesRates([...commonStore.favoritesRates, props.rate]);
        }
    };

    const clickHandler = () => {
        props.withFavorites ? favoritesHandler() : !!props.onClick && props.onClick();
    };

    return (
        <S.Wrapper onClick={clickHandler} {...props}>
            <S.Title>{`${props.rate.code}${
                language === Language.PL && !isMobile ? ',' : ''
            }`}</S.Title>

            {language === Language.PL && !isMobile && (
                <S.SubTitle>{props.rate.currency}</S.SubTitle>
            )}

            <S.Value>{props.rate.mid} PLN</S.Value>

            {isMobile && props.withFavorites && (
                <S.FavoriteIcon
                    isselected={
                        commonStore.favoritesRates.some((item) => item.code === props.rate.code)
                            ? 'true'
                            : ''
                    }
                />
            )}

            {language === Language.PL && isMobile && <S.SubTitle>{props.rate.currency}</S.SubTitle>}

            {!isMobile && props.withFavorites && (
                <S.FavoriteIcon
                    isselected={
                        commonStore.favoritesRates.some((item) => item.code === props.rate.code)
                            ? 'true'
                            : ''
                    }
                />
            )}
        </S.Wrapper>
    );
});
