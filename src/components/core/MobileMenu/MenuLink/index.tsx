import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useRootStore } from 'stores/initStore';

import * as T from './types';
import * as S from './units';

export const MenuLink: FC<T.IMenuLink> = observer((props) => {
    const { commonStore } = useRootStore();

    const location = useLocation();

    return (
        <S.LinkStyled
            to={props.url}
            isactive={location.pathname === props.url ? 'true' : ''}
            onClick={() => commonStore.setMenuOpen(false)}
        >
            {props.children}
        </S.LinkStyled>
    );
});
