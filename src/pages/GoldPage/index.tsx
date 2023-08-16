import React from 'react';
import { observer } from 'mobx-react';

import { Skeleton, Title } from 'components/other';

import { useMountEffect } from 'hooks';
import { useRootStore } from 'stores/initStore';

import * as STYLE from '../units';

import * as S from './units';

export const GoldPage = observer(() => {
    const { commonStore } = useRootStore();

    useMountEffect(() => {
        commonStore.getGoldPrice();
    });

    return (
        <STYLE.PageWrapper>
            <S.TitleWrapper>
                <Title>Wyliczona w NBP cena 1 g złota (w próbie 1000)</Title>

                {!!commonStore.goldData ? (
                    <>
                        <S.TitleStyled>{commonStore.goldData?.cena} PLN</S.TitleStyled>

                        <S.Date>{commonStore.goldData?.data}</S.Date>
                    </>
                ) : (
                    <Skeleton width={200} height={26} />
                )}
            </S.TitleWrapper>
        </STYLE.PageWrapper>
    );
});
