import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

import { CurrencyItem, Skeleton } from 'components/other';

import { useRootStore } from 'stores/initStore';

import * as STYLE from '../units';

import * as S from './units';

export const AllCurrencies = observer(() => {
    const { commonStore } = useRootStore();

    const [currencies, setCurrencies] = useState(commonStore.rates);

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

    return (
        <STYLE.PageWrapper>
            <S.PaperStyled>
                <S.SearchInputStyled {...{ searchValue, setSearchValue }} />

                {commonStore.isRatesALoading || commonStore.isRatesBLoading
                    ? Array.from({ length: 10 }, (_, i) => <Skeleton key={i} height={43} />)
                    : currencies.map((rate, i) => (
                          <CurrencyItem key={i} withFavorites {...{ rate }} />
                      ))}
            </S.PaperStyled>
        </STYLE.PageWrapper>
    );
});
