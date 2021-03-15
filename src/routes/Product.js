import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../containers/ProductDetails';

function Product() {
    const { id } = useParams();

    return (
        <ProductDetails id={id} />
    )
}

export default Product;
