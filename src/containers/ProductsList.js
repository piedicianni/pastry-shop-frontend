import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CardPreview from '../components/CardPreview/CardPreview';
import { products as productsApi, deleteProduct } from '../services/requests/products';
import { AuthenticationContext } from '../App';
import CardCreate from '../components/CardCreate/CardCreate';
import { getProductURL } from '../utils/utils';
import { LINK } from '../constants/constants';
import NotFound from '../components/NotFound';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [deleteId, setDeleteId] = useState('');
    const [wasNotFound, setWasNotFound] = useState(false);
    let history = useHistory();
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        const [productsPromise, productsController] = productsApi(authContext.token);
        productsPromise()
            .then(res => {
                setProducts(res)
                res.length === 0 && setWasNotFound(true);
            })
            .catch(error => setWasNotFound(true));
        return () => productsController.abort();
    }, [authContext.token]);

    useEffect(() => {
        if (deleteId === '') return;
        const [deleteProductPromise, deleteProductController] = deleteProduct(deleteId, authContext.token);
        deleteProductPromise()
            .then(res => setProducts(prevState => prevState.filter(p => p._id !== deleteId)))
            .catch(error => console.log(error));
        return () => deleteProductController.abort();
    }, [deleteId, authContext.token]);

    const onOpenProduct = (id) => history.push(getProductURL(id));
    const onCreateProduct = () => history.push(LINK.createProduct);
    const onDeleteProduct = (id) => setDeleteId(id);

    return (
        <>
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
                            belowText={`Disponibilità: ${product.availability.toString()}`}
                            isAdmin={authContext.token !== ''}
                            onClickDetails={() => onOpenProduct(product._id)}
                            onClickDelete={() => onDeleteProduct(product._id)}
                        />
                    ))
                }
                {
                    authContext.token !== '' && (
                        <CardCreate onClick={() => onCreateProduct()} />
                    )
                }
            </div>
            {
                wasNotFound && <NotFound message={'No items!'} />
            }
        </>
    )
}

export default ProductsList;
