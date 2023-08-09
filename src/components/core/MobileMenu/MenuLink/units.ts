import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { theme } from 'styles';

export const LinkStyled = styled(Link)<{ isactive: string }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 56px;

    color: ${({ theme }) => theme.colors.hintText};

    background-color: ${({ isactive }) => (!!isactive ? theme.colors.box24 : theme.colors.box7)};

    border-radius: 48px;

    transition: all 0.2s ease-in-out;
`;
