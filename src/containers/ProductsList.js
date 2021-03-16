import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CardPreview from '../components/CardPreview/CardPreview';
import { products as productsApi } from '../services/requests/products';
import { AuthenticationContext } from '../App';
import CardCreate from '../components/CardCreate/CardCreate';
import {getProductURL} from '../utils/utils';

function ProductsList() {
    const [products, setProducts] = useState([]);
    let history = useHistory();
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        const [productsPromise, productsController] = productsApi(authContext.token);
        productsPromise()
            .then(res => setProducts(res))
            .catch(error => console.log(error));
        return () => productsController.abort();
    }, [authContext.token]);

    const onOpenProduct = (id) => history.push(getProductURL(id));
    const onCreateProduct = () => {}; 

    return (
        <div className='products-list-container'>
            {
                products.map((product, index) => (
                    <CardPreview
                        key={index}
                        header={`${product.name} ${product.price === 0 ? '(Scaduto)' : ''}`}
                        title={product.price.toString()}
                        body={
                            product.ingredients.map(ingredient => ingredient.name).join(',')
                        }
                        isAdmin={authContext.token !== ''}
                        onClickDetails={() => onOpenProduct(product._id)}
                    />
                ))
            }
            {
                authContext.token !== '' && (
                    <CardCreate onClick={() => onCreateProduct()} />
                )
            }
        </div>
    )
}

export default ProductsList;
