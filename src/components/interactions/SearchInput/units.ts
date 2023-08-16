import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as CrossSVG } from './images/cross-icon.svg';
import { ReactComponent as SearchSVG } from './images/search-icon.svg';

export const InputSearchWrapper = styled.div<{ isInputFocused: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    min-width: 180px;
    height: 40px;
    padding: 0 8px 0 16px;

    background-color: ${({ isInputFocused }) =>
        isInputFocused ? theme.colors.box24 : theme.colors.box13};

    border: 2px solid transparent;

    border-color: ${({ isInputFocused }) =>
        isInputFocused ? `${theme.colors.primary}` : `transparent`};

    border-radius: ${theme.borderRadiusSecondary};

    transition: all 0.2s ease-in-out;

    cursor: text;

    @media (hover: hover) {
        &:hover {
            background-color: ${theme.colors.box24};
        }
    }
`;

export const InputSearch = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px 0;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.small.fontSize};

    color: ${({ theme }) => theme.colors.text};

    background-color: transparent;

    transition: background-color 0.2s ease-in-out;

    &::placeholder {
        font-weight: ${theme.text.small.fontWeight};
        font-size: ${theme.text.small.fontSize};
        line-height: ${theme.text.normal.lineHeight};

        color: ${theme.colors.gray};
    }
`;

export const SearchIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 16px;
    height: 16px;
`;

export const SearchIcon = styled(SearchSVG)<{ islight: string }>`
    & > path {
        transition: stroke 0.2s ease-in-out;

        stroke: ${({ islight }) => !!islight && theme.colors.gray};
    }
`;

export const CrossIcon = styled(CrossSVG)<{ islight: string }>`
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;

    cursor: pointer;

    transition: scale 0.2s ease-in-out;

    & > path {
        transition: stroke 0.2s ease-in-out;

        stroke: ${({ islight }) => !!islight && theme.colors.primary};
    }

    @media (hover: hover) {
        &:hover {
            scale: 1.2;
        }
    }
`;
