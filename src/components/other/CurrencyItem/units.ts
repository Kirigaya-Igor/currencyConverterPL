import styled from '@emotion/styled';

import { theme, toEnd } from 'styles';

import { ReactComponent as FavoriteSVG } from './images/favorite.svg';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px 8px;

    width: 100%;
    padding: 8px 16px;

    border: 1px solid ${theme.colors.box24};
    border-radius: ${theme.borderRadiusSecondary};

    cursor: pointer;

    transition: all 0.2s ease-in-out;

    @media (hover: hover) {
        &:hover {
            background-color: ${theme.colors.box13};

            path {
                fill: ${theme.colors.orange};
            }
        }
    }

    ${toEnd('mobile')} {
        flex-wrap: wrap;
    }
`;

export const Title = styled.p`
    font-weight: ${theme.text.normal.fontWeight};
    font-size: ${theme.text.normal.fontSize};
`;

export const SubTitle = styled.p`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.normal.fontSize};

    ${toEnd('mobile')} {
        width: 100%;
    }
`;

export const Value = styled.p`
    margin-left: auto;

    font-weight: ${theme.text.normal.fontWeight};
    font-size: ${theme.text.extraHuge.fontSize};

    color: ${theme.colors.green};
`;

export const FavoriteIcon = styled(FavoriteSVG)<{ isselected: string }>`
    min-width: 24px;
    min-height: 22px;

    cursor: pointer;

    path {
        transition: fill 0.2s ease-in-out;

        fill: ${({ isselected }) => !!isselected && theme.colors.orange};
    }

    @media (hover: hover) {
        &:hover {
            path {
                fill: ${theme.colors.orange};
            }
        }
    }
`;
