import styled from '@emotion/styled';

import { theme } from 'styles';

export const TitleWrapper = styled.div`
    width: 100%;
    margin-bottom: 32px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    width: 100%;
    padding: 16px 8px;
    margin-top: 16px;

    background-color: ${theme.colors.box7};

    border-radius: ${theme.borderRadiusSecondary};
`;

export const InfoText = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.tiny.fontSize};

    color: ${({ theme }) => theme.colors.text};

    text-align: center;
`;
