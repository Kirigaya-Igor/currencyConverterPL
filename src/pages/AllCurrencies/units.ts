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

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ChartWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;
