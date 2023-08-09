import { ReactElement, ReactNode } from 'react';

export interface IChip {
    children?: ReactNode;

    isActive?: boolean;
    isCircle?: boolean;

    icon?: ReactElement | string;
    iconSize?: 'small' | 'medium' | 'large';

    styleSheame?: 'default' | 'primary' | 'oval';

    onClick?: (e: any) => void;
}

export interface IRadioIconChip extends Pick<IChip, 'isActive' | 'icon' | 'onClick'> {
    isLoading?: boolean;
}

export interface IChipWrapper extends Pick<IChip, 'isActive' | 'isCircle' | 'styleSheame'> {
    isLight: boolean;
    isLoading?: boolean;
}
