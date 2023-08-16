import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from './const';

export const ColumnWrapper = styled.div<{ gap?: number; fullWidth?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const FlexAlignCenterWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const FlexBetweenWrapper = styled.div<{ gap?: number; fullWidth?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const TextGray = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.tiny.fontSize};

    color: ${theme.colors.gray};
`;

export const dropdownShowAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const dropdownHideAnimation = keyframes`
    0% {
        opacity: 1;
    }
    
    100% {
        opacity: 0;
    }
`;
