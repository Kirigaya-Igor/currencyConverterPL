import styled from '@emotion/styled';

import { Paper } from 'components/containers';
import { SearchInput } from 'components/interactions';

export const PaperStyled = styled(Paper)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const SearchInputStyled = styled(SearchInput)`
    margin-bottom: 16px;
`;
