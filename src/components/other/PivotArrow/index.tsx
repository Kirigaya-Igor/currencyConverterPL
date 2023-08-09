import React, { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const PivotArrow: FC<T.IPivotArrow> = (props) => {
    return (
        <S.ArrowWrapper
            isActive={props.isActive}
            isDisabled={props.isDisabled}
            isSmall={props.isSmall}
            onClick={() => !props.isDisabled && !!props.onClick && props.onClick()}
            {...props}
        >
            <S.PivotArrow
                isreverse={props.isReverse ? 'true' : ''}
                issmall={props.isSmall ? 'true' : ''}
                direction={props.direction}
            />
        </S.ArrowWrapper>
    );
};
