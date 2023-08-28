import styled from '@emotion/styled';

import { Title } from 'components/other';

import { theme } from 'styles';

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const TitleStyled = styled(Title)`
    color: ${theme.colors.green};
`;

export const Date = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.extraHuge.fontSize};

    transform: translateY(5px);
`;

export const ChartWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;
