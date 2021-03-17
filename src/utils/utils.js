import { LINK } from '../constants/constants';

const getProductURL = id => `${LINK.product.replace(/:id/, id)}`;
const priceFloat = (price, currency) => parseFloat(price.split(currency)[0]);
const areOnlyNumbersAndDots = value => (/^\d*\.?\d*$/).test(value);
const areOnlyNumbers = value => (/^\d+$/).test(value);

export {
    getProductURL,
    priceFloat,
    areOnlyNumbersAndDots,
    areOnlyNumbers
};