import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { observer } from 'mobx-react';

import { Header, MobileMenu } from 'components/core';

import * as PAGES from 'pages';
import { useRootStore } from 'stores/initStore';
import { dark, light } from 'styles/themes';

import * as C from './const';
import * as S from './units';

export const NavigationRouter = observer(() => {
    const { commonStore } = useRootStore();

    const currentTheme = commonStore.isLight ? light : dark;

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

                        <Route path={C.GOLD_PAGE} element={<PAGES.MainPage />} />

                        <Route path="*" element={<PAGES.MainPage />} />
                    </Routes>
                </S.MainWrapper>
            </Router>
        </ThemeProvider>
    );
});
