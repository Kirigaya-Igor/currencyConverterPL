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
