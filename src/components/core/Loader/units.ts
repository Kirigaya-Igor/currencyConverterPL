import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as loaderSVG } from './images/loader.svg';

import * as T from './types';

export const Loader = styled(loaderSVG)<Pick<T.ILoader, 'size' | 'color'>>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    min-width: ${({ size }) => `${size}px`};
    min-height: ${({ size }) => `${size}px`};

    & > circle {
        stroke: ${({ color }) => color === 'white' && theme.colors.white};
    }
`;
