import Api from 'api/axiosWrapper';

export const getRatesA = () => {
    return Api.get({
        url: `/exchangerates/tables/a`,
    });
};

export const getRatesB = () => {
    return Api.get({
        url: `/exchangerates/tables/b`,
    });
};

export const getGoldPrice = () => {
    return Api.get({
        url: `/cenyzlota`,
    });
};

export const getRateForChart = (table: string, rateCode: string) => {
    return Api.get({
        url: `/exchangerates/rates/${table}/${rateCode}/last/255`,
    });
};

export const getGoldForChart = () => {
    return Api.get({
        url: `/cenyzlota/last/255`,
    });
};
