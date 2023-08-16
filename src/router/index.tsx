import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { observer } from 'mobx-react';

import { Header, MobileMenu } from 'components/core';

import { FAVORITES_CURRENCIES_KEY } from 'const';
import { useMountEffect } from 'hooks';
import * as PAGES from 'pages';
import { useRootStore } from 'stores/initStore';
import { getStorage } from 'stores/utils';
import { dark, light } from 'styles/themes';

import * as C from './const';
import * as S from './units';

export const NavigationRouter = observer(() => {
    const { commonStore } = useRootStore();

    const currentTheme = commonStore.isLight ? light : dark;

    useMountEffect(() => {
        (async () => {
            await commonStore.getRatesA();
            commonStore.getRatesB();
        })();
    });

    useEffect(() => {
        const storageRates = getStorage(FAVORITES_CURRENCIES_KEY, true);

        if (
            typeof storageRates === 'object' &&
            storageRates.length > 0 &&
            commonStore.rates.length > 0 &&
            !commonStore.isRatesALoading &&
            !commonStore.isRatesBLoading
        ) {
            commonStore.setFavoritesRates(
                commonStore.rates.filter((item) => storageRates.includes(item.code)),
            );
        }
    }, [commonStore.rates, commonStore.isRatesALoading, commonStore.isRatesBLoading]);

    useEffect(() => {
        document.body.style.color = commonStore.isLight ? '#092636' : '#ffffff';

        document.body.style.backgroundColor = commonStore.isLight ? '#ffffff' : '#1E2934';
    }, [commonStore.isLight]);

    return (
        <ThemeProvider theme={currentTheme}>
            <Router>
                <S.MainWrapper>
                    <Header />

                    <MobileMenu />

                    <Routes>
                        <Route path={C.MAIN_PAGE} element={<PAGES.MainPage />} />

                        <Route path={C.CURRENCIES_PAGE} element={<PAGES.AllCurrencies />} />

                        <Route path={C.GOLD_PAGE} element={<PAGES.GoldPage />} />

                        <Route path="*" element={<PAGES.MainPage />} />
                    </Routes>
                </S.MainWrapper>
            </Router>
        </ThemeProvider>
    );
});
