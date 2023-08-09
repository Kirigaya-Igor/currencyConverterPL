import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Chip } from 'components/interactions';

import { theme } from 'styles';

export const ChipStyled = styled(Chip)<{ isLight?: boolean }>`
    padding: 8px 14px;

    font-size: ${theme.text.small.fontSize};

    background-color: ${({ isActive }) => !isActive && 'transparent'};

    ${({ isActive, isLight }) =>
        !isActive &&
        css`
            @media (hover: hover) {
                &:hover {
                    background-color: ${isLight ? theme.colors.primary15 : theme.colors.box10};

                    color: ${isLight && theme.colors.primary};
                }
            }
        `}
`;
