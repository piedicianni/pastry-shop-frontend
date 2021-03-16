import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../containers/ProductDetails';
import { AuthenticationContext } from '../App';
import ProductEdit from '../containers/ProductEdit';

function Product() {
    const { id } = useParams();
    const authContext = useContext(AuthenticationContext);

    return (
        <>
            {
                authContext.token !== '' ?
                    <ProductEdit id={id} /> :
                    <ProductDetails id={id} />
            }
        </>
    )
}

export default Product;
