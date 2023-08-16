import styled from '@emotion/styled';

import { Modal, Paper } from 'components/containers';
import { CircleButton, SearchInput } from 'components/interactions';

import { theme, toEnd } from 'styles';

import * as STYLE from '../units';

export const PageWrapperStyled = styled(STYLE.PageWrapper)`
    flex-direction: row;
    gap: 32px;

    ${toEnd('tablet')} {
        flex-direction: column;
    }
`;

export const PaperStyled = styled(Paper)`
    display: flex;
    flex-direction: column;
    gap: 16px;

    height: max-content;
`;

export const CurrencyRatioText = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.normal.fontSize};
`;

export const EmptyText = styled(CurrencyRatioText)`
    margin: 0 auto;
`;

export const SearchInputStyled = styled(SearchInput)`
    max-width: 250px;
    margin-bottom: 16px;
`;

export const SearchInputModal = styled(SearchInput)`
    margin-bottom: 16px;
`;

export const CircleButtonStyled = styled(CircleButton)`
    margin-left: auto;
`;

export const ModalStyled = styled(Modal)`
    height: 100%;
`;

export const CurrenciesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
