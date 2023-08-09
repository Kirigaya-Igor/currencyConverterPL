import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Switch } from 'components/interactions';

import { dropdownHideAnimation, dropdownShowAnimation, theme, toEnd } from 'styles';

import { ReactComponent as LanguageSVG } from './images/language-icon.svg';

export const Wrapper = styled.div`
    position: sticky;
    top: 8px;
    left: 0;

    display: flex;
    align-items: center;
    gap: 16px;

    width: 100%;
    max-width: ${theme.maxContentWidth};
    padding: 4px 16px;

    background-color: ${theme.colors.box7};
    border: 1px solid ${theme.colors.box13};
    border-radius: 104px;

    backdrop-filter: blur(20px);

    z-index: ${theme.zIndex.dropdown};

    ${toEnd('mobile')} {
        top: 4px;

        padding: 4px 4px 4px 16px;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-right: auto;
`;

export const Title = styled.p`
    margin-right: 8px;

    font-size: ${theme.text.extraHuge.fontSize};
`;

export const SwitchStyled = styled(Switch)`
    & svg > rect {
        transition: all 0.2s ease-in-out;
    }

    @media (hover: hover) {
        &:hover {
            & svg > rect {
                fill: ${({ isActive }) =>
                    isActive ? theme.colors.primaryHover : theme.colors.primary};

                fill-opacity: 1;
            }
        }
    }
`;

export const RelativeBlock = styled.div`
    position: relative;
`;

export const LanguageWrapper = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    background-color: ${({ isOpen }) => (isOpen ? theme.colors.primary : theme.colors.box24)};

    border-radius: 50%;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    & > svg > path {
        transition: stroke 0.2s ease-in-out;

        stroke: ${({ isOpen }) => isOpen && theme.colors.white};
    }

    @media (hover: hover) {
        &:hover {
            background-color: ${theme.colors.primary};

            & > svg > path {
                stroke: ${theme.colors.white};
            }
        }
    }
`;

export const LanguageIcon = styled(LanguageSVG)<{ islight: string }>`
    & > path {
        stroke: ${({ islight }) => !!islight && theme.colors.gray};
    }
`;

export const DropdownContentWrapper = styled.div<{ isLight: boolean; isOpen: boolean }>`
    position: absolute;
    top: 24px;
    right: -24px;

    padding-top: 16px;

    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

    animation-name: ${({ isOpen }) => (isOpen ? dropdownShowAnimation : dropdownHideAnimation)};

    animation-duration: ${({ isOpen }) => (isOpen ? '0.4s' : '0.2s')};
    animation-fill-mode: forwards;

    z-index: ${theme.zIndex.dropdown};
`;

export const DropdownContent = styled.div<{ isLight: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 8px;

    /* цвет используется только тут */
    background-color: ${({ isLight }) => (isLight ? '#F5F7F9' : theme.colors.lightContainers)};

    border: 1px solid ${theme.colors.box13};
    border-radius: ${theme.borderRadiusPrimary};
`;

export const LanguageItemWrapper = styled.div<{ isActiveItem?: boolean; isLight: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;

    min-width: 240px;
    height: 40px;
    padding: 12px 16px;

    background-color: ${({ isActiveItem, isLight }) =>
        isActiveItem
            ? isLight
                ? theme.colors.primary15
                : theme.colors.box24
            : theme.colors.box13};

    color: ${({ isLight }) => (isLight ? theme.colors.gray : theme.colors.white)};

    border-radius: ${theme.borderRadiusSecondary};

    transition: all 0.2s ease-in-out;

    cursor: pointer;

    user-select: none;

    @media (hover: hover) {
        &:hover {
            background-color: ${({ isLight }) =>
                isLight ? theme.colors.primary15 : theme.colors.box24};

            color: ${({ isLight }) => isLight && theme.colors.primary};
        }
    }
`;

export const LanguageIconWrapper = styled.div`
    width: 22px;
    height: 16px;
    min-width: 22px;
    min-height: 16px;
`;

export const LanguageText = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.small.fontSize};
`;

export const Burger = styled.div<{ isMenuOpen: boolean }>`
    position: relative;

    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;

    background-color: ${({ isMenuOpen }) =>
        isMenuOpen ? theme.colors.primary : theme.colors.box13};

    border-radius: 50%;

    user-select: none;

    cursor: pointer;

    transition: all 0.4s ease-in-out;

    & > span {
        background-color: ${({ isMenuOpen }) => isMenuOpen && theme.colors.white};

        &:nth-of-type(1) {
            top: 13px;
            left: 12px;

            width: 16px;

            ${({ isMenuOpen }) =>
                isMenuOpen &&
                css`
                    top: 19px;
                    width: 0px;
                    left: 50%;
                `}
        }

        &:nth-of-type(2) {
            top: 19px;

            ${({ isMenuOpen }) =>
                isMenuOpen &&
                css`
                    left: 11px;

                    width: 18px;

                    transform: rotate(45deg);
                `}
        }

        &:nth-of-type(3) {
            top: 19px;

            ${({ isMenuOpen }) =>
                isMenuOpen &&
                css`
                    left: 11px;

                    width: 18px;

                    transform: rotate(-45deg);
                `}
        }

        &:nth-of-type(4) {
            top: 25px;
            left: 12px;

            width: 16px;

            ${({ isMenuOpen }) =>
                isMenuOpen &&
                css`
                    top: 19px;
                    width: 0px;
                    left: 50%;
                `}
        }
    }
`;

export const Line = styled.span`
    position: absolute;
    left: 9px;

    width: 22px;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.hintText};

    transition: all 0.4s ease-in-out;

    pointer-events: none;
`;
