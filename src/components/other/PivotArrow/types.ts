export interface IPivotArrow {
    direction?: 'up' | 'down' | 'left' | 'right';
    isReverse?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isSmall?: boolean;

    onClick?: () => void;
}
