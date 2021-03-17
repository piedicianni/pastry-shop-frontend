import { BASE_URL } from '../../constants/constants';
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

const updateProduct = (id = '', product, adminToken = '') => {
    const [promise, controller] = fetchData(`${BASE_URL}/products/${id}`, {
        method: 'PATCH',
        ...(adminToken !== '' && {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            }
        }),
        body: JSON.stringify(product)
    });
    if(id === '' || !product || adminToken === '') return [() => handlerError({ error: 'Not valid params.' }), controller];
    return [promise, controller];
};

const createProduct = (product, adminToken = '') => {
    const [promise, controller] = fetchData(`${BASE_URL}/products/`, {
        method: 'POST',
        ...(adminToken !== '' && {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            }
        }),
        body: JSON.stringify(product)
    });
    if(!product || adminToken === '') return [() => handlerError({ error: 'Not valid params.' }), controller];
    return [promise, controller];
};

const deleteProduct = (id = '', adminToken = '') => {
    const [promise, controller] = fetchData(`${BASE_URL}/products/${id}`, {
        method: 'DELETE',
        ...(adminToken !== '' && {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            }
        })
    });
    if(id === '' || adminToken === '') return [() => handlerError({ error: 'Not valid params.' }), controller];
    return [promise, controller];
};

export {
    products,
    productDetails,
    updateProduct,
    createProduct,
    deleteProduct
};