export const deleteZeros = (str: string) => {
    while (
        (str.slice(-1) === '0' || str.slice(-1) === '.') &&
        str.length !== 1 &&
        str.includes('.')
    ) {
        str = str.slice(0, -1);

        if (str.slice(-1) === '.') {
            str = str.slice(0, -1);
            break;
        }
    }

    return str;
};
