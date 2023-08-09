import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Language } from 'types/common';

import { useDeviceType, useOutsideClick } from 'hooks';
import * as ROUTER from 'router/const';
import { useRootStore } from 'stores/initStore';

import { ReactComponent as EnSVG } from './images/en-icon.svg';
import { ReactComponent as MoonSVG } from './images/moon-icon.svg';
import { ReactComponent as PlSVG } from './images/pl-icon.svg';
import { ReactComponent as RuSVG } from './images/ru-icon.svg';
import { ReactComponent as SunSVG } from './images/sun-icon.svg';

import { MenuLink } from './MenuLink';
import * as S from './units';

const languagesOptions = [
    { value: Language.EN, title: 'English', icon: <EnSVG /> },
    { value: Language.PL, title: 'Polski', icon: <PlSVG /> },
    { value: Language.RU, title: 'Русский', icon: <RuSVG /> },
];

export const Header = observer(() => {
    const { commonStore } = useRootStore();

    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [isMenuDropdownOpen, setMenuDropdownOpen] = useState(false);

    const dropdownLanguageRef = useRef<HTMLDivElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    useOutsideClick(dropdownLanguageRef, isLanguageDropdownOpen, setLanguageDropdownOpen);
    useOutsideClick(dropdownMenuRef, isMenuDropdownOpen, setMenuDropdownOpen);

    const { pathname } = useLocation();

    const { isDesktop } = useDeviceType();

    /* При переходе на новую страницу скроллим вверх */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const {
        i18n: { language, changeLanguage },
    } = useTranslation();

    const toggleLanguageHandler = () => {
        setLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const onMouseMoveLanguage = () => {
        isDesktop && setLanguageDropdownOpen(true);
    };

    const onMouseLeaveLanguage = () => {
        isDesktop && setLanguageDropdownOpen(false);
    };

    const languageHandler = (lang: Language) => {
        changeLanguage(lang);

        setLanguageDropdownOpen(false);
    };

    return (
        <S.Wrapper>
            <S.LinksWrapper>
                <MenuLink url={ROUTER.MAIN_PAGE}>Main</MenuLink>

                <MenuLink url={ROUTER.GOLD_PAGE}>Gold</MenuLink>
            </S.LinksWrapper>

            {/* TODO: временно скрываем */}
            {/* <MenuLink url={ROUTER.CALCULATOR_PAGE}>Calculator</MenuLink> */}

            <S.RelativeBlock
                ref={dropdownLanguageRef}
                onMouseMove={onMouseMoveLanguage}
                onMouseLeave={onMouseLeaveLanguage}
            >
                <S.LanguageWrapper
                    onClick={() => !isDesktop && toggleLanguageHandler()}
                    isOpen={isLanguageDropdownOpen}
                >
                    <S.LanguageIcon islight={commonStore.isLight ? 'true' : ''} />
                </S.LanguageWrapper>

                <S.DropdownContentWrapper
                    isLight={commonStore.isLight}
                    isOpen={isLanguageDropdownOpen}
                >
                    <S.DropdownContent isLight={commonStore.isLight}>
                        {languagesOptions.map((item, index) => (
                            <S.LanguageItemWrapper
                                key={index}
                                isLight={commonStore.isLight}
                                isActiveItem={item.value === language}
                                onClick={() => languageHandler(item.value)}
                            >
                                <S.LanguageIconWrapper>{item.icon}</S.LanguageIconWrapper>

                                <S.LanguageText>{item.title}</S.LanguageText>
                            </S.LanguageItemWrapper>
                        ))}
                    </S.DropdownContent>
                </S.DropdownContentWrapper>
            </S.RelativeBlock>

            <S.SwitchStyled
                isActive={commonStore.isLight}
                setActive={commonStore.toggleTheme}
                icon={commonStore.isLight ? <SunSVG /> : <MoonSVG />}
            />
        </S.Wrapper>
    );
});
