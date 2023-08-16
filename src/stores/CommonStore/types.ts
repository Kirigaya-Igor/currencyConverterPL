import { Nullable } from 'types/common';

export interface ICommonStore {
    isRatesALoading: boolean;
    isRatesBLoading: boolean;

    isLight: boolean;
    isMenuOpen: boolean;
    rates: IRate[];
    favoritesRates: IRate[];
    goldData: Nullable<IGoldPrice>;

    toggleTheme: () => void;
    setMenuOpen: (bool: boolean) => void;
    setFavoritesRates: (favoritesRates: IRate[]) => void;

    getRatesA: () => Promise<any> | unknown;
    getRatesB: () => Promise<any> | unknown;
    getGoldPrice: () => Promise<any> | unknown;
}

export interface IRate {
    code: string;
    currency: string;
    mid: number;
}

export interface IGoldPrice {
    data: string;
    cena: number;
}
