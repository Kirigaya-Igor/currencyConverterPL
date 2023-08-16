import React, { forwardRef, RefObject, useRef, useState } from 'react';
import { observer } from 'mobx-react';

import { Loader } from 'components/core';

import { useFocusInput } from 'hooks';
import { useRootStore } from 'stores/initStore';

import * as T from './types';
import * as S from './units';

export const SearchInput = observer(
    forwardRef<HTMLInputElement, T.ISearch>(({ autofocus = false, ...props }, ref) => {
        const { commonStore } = useRootStore();

        const inputElementRef =
            (ref as RefObject<HTMLInputElement>) || useRef<HTMLInputElement>(null);

        autofocus && useFocusInput(inputElementRef, props.focusTrigger);

        const [isInputFocused, setInputFocused] = useState(false);

        const clearInput = () => {
            props.setSearchValue('');

            inputElementRef.current?.focus();
        };

        const focusHandler = () => {
            setInputFocused(true);

            inputElementRef.current?.focus();
        };

        return (
            <S.InputSearchWrapper onClick={focusHandler} {...{ isInputFocused }} {...props}>
                <S.SearchIconWrapper>
                    {props.isLoading ? (
                        <Loader size={16} />
                    ) : (
                        <S.SearchIcon islight={commonStore.isLight ? 'true' : ''} />
                    )}
                </S.SearchIconWrapper>

                <S.InputSearch
                    value={props.searchValue}
                    onChange={(e) => props.setSearchValue(e.target.value)}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    placeholder={props.placeholder || 'Search'}
                    ref={inputElementRef}
                />

                {!!props.searchValue && (
                    <S.CrossIcon islight={commonStore.isLight ? 'true' : ''} onClick={clearInput} />
                )}
            </S.InputSearchWrapper>
        );
    }),
);
