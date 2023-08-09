import React from 'react';

import { Title } from 'components/other';

import * as STYLE from '../units';

import * as S from './units';

export const MainPage = () => {
    // const [startChartOpenTime] = useState(Date.now());

    return (
        <STYLE.PageWrapper>
            <S.TitleWrapper>
                <Title>Start</Title>
            </S.TitleWrapper>
        </STYLE.PageWrapper>
    );
};
