import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useRootStore } from 'stores/initStore';

import * as T from './types';
import * as S from './units';

export const MenuLink: FC<T.IMenuLink> = observer((props) => {
    const { commonStore } = useRootStore();

    const location = useLocation();

    return (
        <Link to={props.url}>
            <S.ChipStyled
                isActive={location.pathname === props.url}
                isLight={commonStore.isLight}
                isCircle
            >
                {props.children}
            </S.ChipStyled>
        </Link>
    );
});
