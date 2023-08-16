export interface ISearch {
    searchValue: string;
    placeholder?: string;
    focusTrigger?: boolean;
    autofocus?: boolean;
    isLoading?: boolean;

    setSearchValue: (value: string) => void;
}
