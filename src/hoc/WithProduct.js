import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { productDetails } from '../services/requests/products';
import NotFound from '../components/NotFound';
import { AuthenticationContext } from '../App';

const WithProduct = WrappedComponent => function Component({ id }) {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        ingredients: [],
        sale: false
    });
    const [wasNotFound, setWasNotFound] = useState(false);
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        if(!id) return;
        const [productPromise, productController] = productDetails(id, authContext.token);
        productPromise()
            .then(res => setProduct(res))
            .catch(error => setWasNotFound(true));
        return () => productController.abort();
    }, [id, authContext.token]);

    Component.displayName = 'WithProduct';

    return (
        <>
            {
                product.name !== '' &&
                <WrappedComponent id={id} {...product} price={product.price.toString()} />
            }
            {
                wasNotFound && <NotFound />
            }
        </>
    )
}

WithProduct.propTypes = {
    id: PropTypes.number
};

export default WithProduct;
