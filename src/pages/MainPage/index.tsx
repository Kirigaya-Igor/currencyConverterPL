import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { Nullable } from 'types/common';

import { CircleButton, Input } from 'components/interactions';
import { CurrencyItem, Skeleton } from 'components/other';

import { IRate } from 'stores/CommonStore';
import { useRootStore } from 'stores/initStore';
import { FlexAlignCenterWrapper, FlexBetweenWrapper } from 'styles';
import { deleteZeros, replaceNumInput } from 'utils';

import * as S from './units';

export const MainPage = observer(() => {
    const { commonStore } = useRootStore();

    const [firstInputValue, setFirstInputValue] = useState('0');
    const [secondInputValue, setSecondInputValue] = useState('0');

    const [isFavoritesLoaded, setFavoritesLoaded] = useState(false);
    const [favoritesRates, setFavoritesRates] = useState(commonStore.favoritesRates);
    const [searchValue, setSearchValue] = useState('');

    const [selectedCurrencie, setSelectedCurrencie] = useState<Nullable<IRate>>(null);

    const [isFavoritesModalOpen, setFavoritesModalOpen] = useState(false);
    const [modalItems, setModalItems] = useState(commonStore.rates);
    const [modalSearchValue, setModalSearchValue] = useState('');

    const [isChangeModalOpen, setChangeModalOpen] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        setFavoritesRates(
            commonStore.favoritesRates.filter(
                (rate) =>
                    rate.currency.toLowerCase().includes(searchValue.toLowerCase()) ||
                    rate.code.toLowerCase().includes(searchValue.toLowerCase()),
            ),
        );
    }, [searchValue, commonStore.favoritesRates]);

    useEffect(() => {
        setModalItems(
            commonStore.rates.filter(
                (rate) =>
                    rate.currency.toLowerCase().includes(modalSearchValue.toLowerCase()) ||
                    rate.code.toLowerCase().includes(modalSearchValue.toLowerCase()),
            ),
        );
    }, [modalSearchValue, commonStore.rates]);

    useEffect(() => {
        !isFavoritesModalOpen && setModalSearchValue('');
    }, [isFavoritesModalOpen, isChangeModalOpen]);

    useEffect(() => {
        const USD = commonStore.rates.find((item) => item.code == 'USD');

        !!USD && setSelectedCurrencie(USD);

        commonStore.rates.length > 0 && setFavoritesLoaded(true);
    }, [commonStore.rates]);

    useEffect(() => {
        !!selectedCurrencie &&
            !!firstInputValue &&
            setSecondInputValue(deleteZeros((+firstInputValue * selectedCurrencie.mid).toFixed(5)));
    }, [selectedCurrencie]);

    const firstInputHandler = (value: string) => {
        const numValue = replaceNumInput(value);

        setFirstInputValue(numValue);

        !!selectedCurrencie &&
            setSecondInputValue(deleteZeros((+numValue * selectedCurrencie.mid).toFixed(5)));
    };

    const secondInputHandler = (value: string) => {
        const numValue = replaceNumInput(value);

        setSecondInputValue(numValue);

        !!selectedCurrencie &&
            setFirstInputValue(deleteZeros((+numValue / selectedCurrencie.mid).toFixed(5)));
    };

    const favoritesHandler = (rate: IRate) => {
        if (commonStore.favoritesRates.some((item) => item.code === rate.code)) {
            commonStore.setFavoritesRates(
                commonStore.favoritesRates.filter((item) => item.code !== rate.code),
            );
        } else {
            commonStore.setFavoritesRates([...commonStore.favoritesRates, rate]);
        }
    };

    return (
        <S.PageWrapperStyled>
            <S.PaperStyled>
                {selectedCurrencie ? (
                    <>
                        <Input
                            value={firstInputValue}
                            setValue={firstInputHandler}
                            label={selectedCurrencie.code}
                            isLabelRight
                            inputProps={{
                                inputMode: 'decimal',
                            }}
                            focusHandler={() => firstInputValue === '0' && firstInputHandler('')}
                            blurHandler={() => !firstInputValue && secondInputHandler('0')}
                        />

                        <FlexBetweenWrapper>
                            {!!selectedCurrencie && (
                                <S.CurrencyRatioText>{`1 ${selectedCurrencie.code} = ${selectedCurrencie.mid} PLN`}</S.CurrencyRatioText>
                            )}

                            <CircleButton size="small" onClick={() => setChangeModalOpen(true)}>
                                {t('mainPage.Change currency')}
                            </CircleButton>
                        </FlexBetweenWrapper>

                        <Input
                            value={secondInputValue}
                            setValue={secondInputHandler}
                            label="PLN"
                            isLabelRight
                            inputProps={{
                                inputMode: 'decimal',
                            }}
                            focusHandler={() => secondInputValue === '0' && secondInputHandler('')}
                            blurHandler={() => !secondInputValue && secondInputHandler('0')}
                        />
                    </>
                ) : (
                    <>
                        <Skeleton height={48} />

                        <Skeleton height={22} />

                        <Skeleton height={48} />
                    </>
                )}
            </S.PaperStyled>

            <S.PaperStyled>
                <FlexAlignCenterWrapper gap={32} isCenter={false}>
                    <S.SearchInputStyled {...{ searchValue, setSearchValue }} />

                    <S.CircleButtonStyled size="small" onClick={() => setFavoritesModalOpen(true)}>
                        {t('mainPage.Add favorites')}
                    </S.CircleButtonStyled>
                </FlexAlignCenterWrapper>

                {(commonStore.isRatesALoading || commonStore.isRatesBLoading) && !isFavoritesLoaded
                    ? Array.from({ length: 5 }, (_, i) => <Skeleton key={i} height={43} />)
                    : favoritesRates.length > 0
                    ? favoritesRates.map((rate, i) => (
                          <CurrencyItem
                              key={i}
                              onClick={() => setSelectedCurrencie(rate)}
                              {...{ rate }}
                          />
                      ))
                    : isFavoritesLoaded && (
                          <S.EmptyText>{t('mainPage.No favorites currencies')}</S.EmptyText>
                      )}
            </S.PaperStyled>

            <S.ModalStyled
                isVisible={isFavoritesModalOpen || isChangeModalOpen}
                setVisible={isFavoritesModalOpen ? setFavoritesModalOpen : setChangeModalOpen}
                title={
                    isFavoritesModalOpen
                        ? t('mainPage.Select favorites currencies')
                        : t('mainPage.Change currency')
                }
            >
                <S.CurrenciesWrapper>
                    <S.SearchInputModal
                        searchValue={modalSearchValue}
                        setSearchValue={setModalSearchValue}
                    />

                    {modalItems.map((rate, i) => (
                        <CurrencyItem
                            key={i}
                            withFavorites={!isChangeModalOpen}
                            onClick={
                                isChangeModalOpen
                                    ? () => {
                                          setSelectedCurrencie(rate);

                                          setChangeModalOpen(false);
                                      }
                                    : () => {
                                          favoritesHandler(rate);
                                      }
                            }
                            {...{ rate }}
                        />
                    ))}
                </S.CurrenciesWrapper>
            </S.ModalStyled>
        </S.PageWrapperStyled>
    );
});
