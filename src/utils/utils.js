import { LINK } from '../constants/constants';

const getProductURL = id => `${LINK.product.replace(/:id/, id)}`;
const priceFloat = (price, currency) => parseFloat(price.split(currency)[0]);

export {
    getProductURL,
    priceFloat
};