import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as ArrowSVG } from './images/arrow.svg';

import { IPivotArrow } from './types';

const getTransform = (isReverse: boolean, direction: string) => {
    const directionConst = {
        up: -180,
        down: 0,
        left: 90,
        right: -90,
    } as Record<string, number>;

    return isReverse
        ? direction === 'down'
            ? `rotateX(${directionConst[direction] + 180}deg)`
            : `rotate(${directionConst[direction] + 180}deg)`
        : direction === 'down' || direction === 'up'
        ? `rotateX(${directionConst[direction]}deg)`
        : `rotate(${directionConst[direction]}deg)`;
};

export const ArrowWrapper = styled.div<Pick<IPivotArrow, 'isActive' | 'isDisabled' | 'isSmall'>>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ isSmall }) => (isSmall ? '24px' : '32px')};
    height: ${({ isSmall }) => (isSmall ? '24px' : '32px')};
    min-width: ${({ isSmall }) => (isSmall ? '24px' : '32px')};
    min-height: ${({ isSmall }) => (isSmall ? '24px' : '32px')};

    background-color: ${theme.colors.box13};

    border-radius: 50%;

    transition: background-color 0.2s ease-in-out;

    cursor: pointer;

    & > * path {
        transition: stroke 0.2s ease-in-out;
    }

    ${({ isActive, isDisabled }) =>
        (isActive || isDisabled) &&
        css`
            background-color: ${!isDisabled && theme.colors.primary};

            & > * path {
                stroke: ${isDisabled ? theme.colors.box24 : theme.colors.white};
            }
        `}

    @media (hover: hover) {
        &:hover {
            background-color: ${({ isActive, isDisabled }) =>
                !isActive && !isDisabled && theme.colors.box24};

            & > * path {
                stroke: ${({ isActive, isDisabled, theme }) =>
                    !isActive && !isDisabled && theme.colors.hintText};
            }
        }
    }
`;

export const PivotArrow = styled(ArrowSVG)<
    Pick<IPivotArrow, 'direction'> & { isreverse: string; issmall: string }
>`
    transform: ${({ isreverse = '', direction = 'down' }) => getTransform(!!isreverse, direction)};

    width: ${({ issmall }) => (!!issmall ? '15px' : '20px')};
    min-width: ${({ issmall }) => (!!issmall ? '15px' : '20px')};
    min-height: 20px;

    transition: transform 0.4s ease-in-out;
`;
