import { LINK } from '../constants/params';

const getProductURL = id => `${LINK.product.replace(/:id/, id)}`;

export {
    getProductURL
};