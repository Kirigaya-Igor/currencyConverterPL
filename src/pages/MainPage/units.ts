import styled from '@emotion/styled';

import { Modal, Paper } from 'components/containers';
import { CircleButton, SearchInput } from 'components/interactions';

import { FlexAlignCenterWrapper, FlexBetweenWrapper, theme, toEnd } from 'styles';

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

export const CurrencyRatioWrapper = styled(FlexBetweenWrapper)`
    ${toEnd('mobile')} {
        flex-direction: column;
        gap: 16px;

        max-width: 100%;
    }
`;

export const CurrencyRatioText = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.normal.fontSize};
`;

export const EmptyText = styled(CurrencyRatioText)`
    margin: 0 auto;
`;

export const SearchInputWrapper = styled(FlexAlignCenterWrapper)`
    ${toEnd('mobile')} {
        flex-direction: column-reverse;
        gap: 16px;

        max-width: 100%;
    }
`;

export const SearchInputStyled = styled(SearchInput)`
    max-width: 250px;
    margin-bottom: 16px;

    ${toEnd('mobile')} {
        max-width: 100%;
        margin-bottom: 0;
    }
`;

export const SearchInputModal = styled(SearchInput)`
    margin-bottom: 16px;
`;

export const CircleButtonStyled = styled(CircleButton)`
    margin-left: auto;

    ${toEnd('mobile')} {
        width: 100%;
    }
`;

export const ModalStyled = styled(Modal)`
    height: 100%;
`;

export const CurrenciesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
