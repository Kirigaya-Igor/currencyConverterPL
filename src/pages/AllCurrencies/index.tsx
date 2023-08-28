import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { observer } from 'mobx-react';
import { Nullable } from 'types/common';

import { CurrencyItem, Expand, Skeleton } from 'components/other';

import { IRate } from 'stores/CommonStore';
import { useRootStore } from 'stores/initStore';
import { getChartOptions } from 'utils';

import * as STYLE from '../units';

import * as S from './units';

export const AllCurrencies = observer(() => {
    const { commonStore } = useRootStore();

    const [currencies, setCurrencies] = useState(commonStore.rates);
    const [selectedRate, setSelectedRate] = useState<Nullable<IRate>>(null);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setCurrencies(
            commonStore.rates.filter(
                (rate) =>
                    rate.currency.toLowerCase().includes(searchValue.toLowerCase()) ||
                    rate.code.toLowerCase().includes(searchValue.toLowerCase()),
            ),
        );
    }, [searchValue, commonStore.rates]);

    useEffect(() => {
        if (!!selectedRate) {
            commonStore.getRateForChart(selectedRate.table, selectedRate.code);
        }
    }, [selectedRate]);

    const config = {
        xData: commonStore.ratesChartData.map((item) => item.effectiveDate),
        yData: commonStore.ratesChartData.map((item) => item.mid),
        currentPrice: +(selectedRate?.mid || 0),
        rateCode: selectedRate?.code || '',
    };

    const chartToggle = (rate: IRate) => {
        setSelectedRate(selectedRate?.code === rate.code ? null : rate);
    };

    return (
        <STYLE.PageWrapper>
            <S.PaperStyled>
                <S.SearchInputStyled {...{ searchValue, setSearchValue }} />

                {commonStore.isRatesALoading || commonStore.isRatesBLoading
                    ? Array.from({ length: 10 }, (_, i) => <Skeleton key={i} height={43} />)
                    : currencies.map((rate, i) => {
                          return (
                              <S.FlexColumn key={i}>
                                  <CurrencyItem onClick={() => chartToggle(rate)} {...{ rate }} />

                                  <Expand isOpen={selectedRate?.code === rate.code}>
                                      <S.ChartWrapper>
                                          <ReactECharts
                                              style={{ height: '530px', width: '100%' }}
                                              option={getChartOptions(config, commonStore.isLight)}
                                          />
                                      </S.ChartWrapper>
                                  </Expand>
                              </S.FlexColumn>
                          );
                      })}
            </S.PaperStyled>
        </STYLE.PageWrapper>
    );
});
