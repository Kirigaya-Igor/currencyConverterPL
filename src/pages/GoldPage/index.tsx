import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactECharts from 'echarts-for-react';
import { observer } from 'mobx-react';

import { Skeleton, Title } from 'components/other';

import { useMountEffect } from 'hooks';
import { useRootStore } from 'stores/initStore';
import { getChartOptions } from 'utils';

import * as STYLE from '../units';

import * as S from './units';

export const GoldPage = observer(() => {
    const { commonStore } = useRootStore();

    const { t } = useTranslation();

    useMountEffect(() => {
        commonStore.getGoldPrice();
        commonStore.getGoldForChart();
    });

    const config = {
        xData: commonStore.goldChartData.map((item) => item.data),
        yData: commonStore.goldChartData.map((item) => item.cena),
        currentPrice: commonStore.goldData?.cena || 0,
        rateCode: 'of gold',
    };

    return (
        <STYLE.PageWrapper>
            <S.TitleWrapper>
                <Title>{t('goldPage.title')}</Title>

                {!!commonStore.goldData ? (
                    <>
                        <S.TitleStyled>{commonStore.goldData?.cena} PLN</S.TitleStyled>

                        <S.Date>{commonStore.goldData?.data}</S.Date>
                    </>
                ) : (
                    <Skeleton width={200} height={26} />
                )}
            </S.TitleWrapper>

            <S.ChartWrapper>
                <ReactECharts
                    style={{ height: '530px', width: '100%' }}
                    option={getChartOptions(config, commonStore.isLight)}
                />
            </S.ChartWrapper>
        </STYLE.PageWrapper>
    );
});
