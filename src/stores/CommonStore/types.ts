export interface ICommonStore {
    isLight: boolean;
    isMenuOpen: boolean;

    toggleTheme: () => void;
    setMenuOpen: (bool: boolean) => void;
}
