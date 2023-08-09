import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import { IChipWrapper } from './types';

const primaryStyle = (isLight: boolean, isActive?: boolean) => css`
    height: 48px;
    padding: 13px 16px;

    font-size: ${theme.text.normal.fontSize};
    color: ${theme.colors.white};

    background-color: ${isActive ? theme.colors.primary : theme.colors.primary15};

    border: 1px solid ${theme.colors.primary};

    @media (hover: hover) {
        &:hover {
            background-color: ${!isActive && theme.colors.primaryHover};

            border-color: ${!isActive && theme.colors.primaryHover};

            color: ${isLight && theme.colors.primary};
        }
    }
`;

const ovalStyle = (isLight: boolean, isActive?: boolean) => css`
    height: 48px;
    padding: 4px 16px 4px 4px;

    font-size: ${theme.text.normal.fontSize};

    color: ${isActive ? theme.colors.white : isLight && theme.colors.primary};

    background-color: ${isActive ? theme.colors.primary : theme.colors.primary15};

    border: 2px solid ${theme.colors.primary};
    border-radius: 60px;

    @media (hover: hover) {
        &:hover {
            background-color: ${!isActive && theme.colors.primaryHover};

            border-color: ${!isActive && theme.colors.primaryHover};

            color: ${isLight && theme.colors.white};
        }
    }
`;

export const Wrapper = styled.div<IChipWrapper>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    width: max-content;
    height: 40px;
    padding: 10px 8px;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.tiny.fontSize};

    background-color: ${theme.colors.box7};

    color: ${({ isLight }) => (isLight ? theme.colors.gray : theme.colors.white)};

    border-radius: ${({ isCircle }) => (isCircle ? '48px' : theme.borderRadiusSecondary)};

    cursor: pointer;

    user-select: none;

    transition: all 0.2s ease-in-out;

    ${({ isActive, isLight }) =>
        isActive &&
        css`
            background-color: ${isLight ? theme.colors.primary : theme.colors.box24};

            color: ${isLight && theme.colors.white};
        `}

    ${({ isActive, isLight }) =>
        !isActive &&
        css`
            @media (hover: hover) {
                &:hover {
                    background-color: ${isLight ? theme.colors.primary15 : theme.colors.box24};

                    color: ${isLight && theme.colors.primary};
                }
            }
        `}

    ${({ isLight, isActive, styleSheame }) =>
        styleSheame === 'primary'
            ? primaryStyle(isLight, isActive)
            : styleSheame === 'oval' && ovalStyle(isLight, isActive)}
`;

export const RadioIconChip = styled.div<Pick<IChipWrapper, 'isActive' | 'isLoading'>>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    /* этот цвет используется только тут */
    border: 2px solid
        ${({ isActive, isLoading }) =>
            isActive && !isLoading ? theme.colors.primary : 'rgba(115, 143, 172, 0.4)'};

    border-radius: 50%;

    transition: border-color 0.2s ease-in-out;

    cursor: ${({ isLoading }) => !isLoading && 'pointer'};

    @media (hover: hover) {
        &:hover {
            border-color: ${({ isLoading }) => !isLoading && theme.colors.primary};
        }
    }
`;

const smallIcon = css`
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
`;

const mediumIcon = css`
    width: 28px;
    height: 28px;
    min-width: 28px;
    min-height: 28px;
`;

const largeIcon = css`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
`;

export const Icon = styled.img<{ iconSize?: 'small' | 'medium' | 'large' }>`
    ${({ iconSize = 'small' }) =>
        iconSize === 'small' ? smallIcon : iconSize === 'medium' ? mediumIcon : largeIcon}
`;

export const IconWrapper = styled.div<{ iconSize?: 'small' | 'medium' | 'large' }>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ iconSize = 'small' }) =>
        iconSize === 'small' ? smallIcon : iconSize === 'medium' ? mediumIcon : largeIcon}

    & > svg {
        ${({ iconSize = 'small' }) =>
            iconSize === 'small' ? smallIcon : iconSize === 'medium' ? mediumIcon : largeIcon}
    }
`;
