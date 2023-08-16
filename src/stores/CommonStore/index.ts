import { runInAction } from 'mobx';

import * as API from 'api/common';
import { FAVORITES_CURRENCIES_KEY } from 'const';
import { getStorage, persistStorage } from 'stores/utils';

import { ICommonStore } from './types';
export * from './types';

const isLightKey = 'isLight';

export const CommonStore = (): ICommonStore => {
    const storageTheme = getStorage(isLightKey);

    return {
        isRatesALoading: false,
        isRatesBLoading: false,

        isLight: !!storageTheme ? storageTheme === 'true' : false,
        isMenuOpen: false,

        rates: [],
        favoritesRates: [],
        goldData: null,

        toggleTheme() {
            this.isLight = !this.isLight;

            persistStorage(isLightKey, this.isLight.toString());
        },

        setMenuOpen(bool) {
            this.isMenuOpen = bool;
        },

        setFavoritesRates(favoritesRates) {
            this.favoritesRates = favoritesRates;

            persistStorage(
                FAVORITES_CURRENCIES_KEY,
                favoritesRates.map((item) => item.code),
                true,
            );
        },

        async getRatesA() {
            try {
                this.isRatesALoading = true;

                const res = await API.getRatesA();

                if (res.data) {
                    runInAction(() => {
                        this.rates = [...this.rates, ...res.data[0].rates];
                    });
                }
            } catch (error) {
                // TODO: take other
                console.error(error as Error);
            } finally {
                runInAction(() => {
                    this.isRatesALoading = false;
                });
            }
        },

        async getRatesB() {
            try {
                this.isRatesBLoading = true;

                const res = await API.getRatesB();

                if (res.data) {
                    runInAction(() => {
                        this.rates = [...this.rates, ...res.data[0].rates];
                    });
                }
            } catch (error) {
                // TODO: take other
                console.error(error as Error);
            } finally {
                runInAction(() => {
                    this.isRatesBLoading = false;
                });
            }
        },

        async getGoldPrice() {
            try {
                const res = await API.getGoldPrice();

                if (res.data) {
                    runInAction(() => {
                        this.goldData = res.data[0];
                    });
                }
            } catch (error) {
                // TODO: take other
                console.error(error as Error);
            }
        },
    };
};
