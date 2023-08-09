import styled from '@emotion/styled';

import { Switch } from 'components/interactions';

import { theme } from 'styles';

export const Wrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 66px;
    left: 8px;

    width: calc(100% - 16px);
    height: 100vh;

    pointer-events: ${({ isOpen }) => !isOpen && 'none'};

    z-index: ${theme.zIndex.dropdown};
`;

export const ExpandContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    overflow: hidden;
`;

export const LinksWrapper = styled.div<{ isLight: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;
    padding: 16px 8px;

    background-color: ${theme.colors.box7};

    border: 1px solid ${({ isLight }) => (isLight ? '#E4EAEF' : '#394855')};
    border-radius: 20px;

    /* цвет используется только тут */
    background-color: ${({ isLight }) => (isLight ? '#F5F7F9' : '#2F3B47')};

    transition: all 0.2s ease-in-out;
`;

export const LanguagesWrapper = styled(LinksWrapper)`
    gap: 0;
`;

export const LanguageToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    width: 100%;
`;

export const LanguagesBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding-top: 16px;
`;

export const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    width: 100%;

    margin-bottom: 16px;
`;

export const SwitchName = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.small.fontSize};

    color: ${theme.colors.gray};
`;

export const SwitchStyled = styled(Switch)`
    & svg > rect {
        transition: all 0.2s ease-in-out;
    }
`;
