import { useEffect, useState, useContext } from 'react';
import CardDetails from '../components/CardDetails/CardDetails';
import { productDetails } from '../services/requests/products';
import { AuthenticationContext } from '../App';

function ProductDetails({ id }) {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        ingredients: []
    });
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        const [productPromise, productController] = productDetails(id, authContext.token);
        productPromise()
            .then(res => setProduct(res))
            .catch(error => console.log(error));
        return () => productController.abort();
    }, [id, authContext.token])

    return (
        <CardDetails {...product} price={product.price.toString()} />
    )
}

export default ProductDetails;
