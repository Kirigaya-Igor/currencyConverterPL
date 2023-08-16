import { IRate } from 'stores/CommonStore';

export interface ICurrencyItem {
    rate: IRate;
    withFavorites?: boolean;

    onClick?: () => void;
}
