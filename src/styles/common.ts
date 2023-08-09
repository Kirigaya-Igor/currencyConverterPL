/* стили */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from './const';

export const TextGray = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.tiny.fontSize};

    color: ${theme.colors.gray};
`;

/* анимации */

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
