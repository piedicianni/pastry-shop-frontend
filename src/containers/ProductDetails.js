import PropTypes from 'prop-types';
import WithProduct from '../hoc/WithProduct';
import CardDetails from '../components/CardDetails/CardDetails';

function ProductDetails({ name, price, ingredients, availability }) {
    return (
        <CardDetails name={name} price={price} ingredients={ingredients} availability={availability} />
    )
}

ProductDetails.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    ingredients: PropTypes.array
};

export default WithProduct(ProductDetails);
