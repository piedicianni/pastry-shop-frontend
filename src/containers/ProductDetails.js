import { useEffect, useState, useContext } from 'react';
import CardDetails from '../components/CardDetails/CardDetails';
import { productDetails } from '../services/requests/products';
import NotFound from '../components/NotFound';
import { AuthenticationContext } from '../App';

function ProductDetails({ id }) {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        ingredients: []
    });
    const [wasNotFound, setWasNotFound] = useState(false);
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        const [productPromise, productController] = productDetails(id, authContext.token);
        productPromise()
            .then(res => setProduct(res))
            .catch(error => setWasNotFound(true));
        return () => productController.abort();
    }, [id, authContext.token])

    return (
        <>
            {
                product.name !== '' &&
                <CardDetails {...product} price={product.price.toString()} />
            }
            {
                wasNotFound && <NotFound />
            }
        </>
    )
}

export default ProductDetails;
