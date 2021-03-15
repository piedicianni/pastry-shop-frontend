import { BASE_URL } from '../../constants/params';
import { fetchData, handlerError } from '../services';

const products = (adminToken = '') => {
    const [promise, controller] = fetchData(`${BASE_URL}/products`, {
        method: 'GET',
        ...(adminToken !== '' && {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            }
        })
    });
    return [promise, controller];
};

const productDetails = (id = '', adminToken = '') => {
    const [promise, controller] = fetchData(`${BASE_URL}/products/${id}`, {
        method: 'GET',
        ...(adminToken !== '' && {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            }
        })
    });
    if (id === '') return [() => handlerError({ error: 'Not valid ID.' }), controller];
    return [promise, controller];
};

export {
    products,
    productDetails
};