import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import WithProduct from '../hoc/WithProduct';
import PropTypes from 'prop-types';
import CardForm from '../components/CardForm/CardForm';
import { priceFloat } from '../utils/utils';
import ingredientsListApi from '../services/requests/ingredientsList';
import { updateProduct } from '../services/requests/products';
import { AuthenticationContext } from '../App';

function ProductEdit({ _id = '', name = '', price = '', ingredients = [], sale = false }) {
    const [nameValue, setNameValue] = useState(name);
    const [priceValue, setPriceValue] = useState(priceFloat(price, '€').toString());
    const [ingredientsValue, setIngredientsValue] = useState(ingredients);
    const [saleValue, setSaleValue] = useState(sale);
    const [ingredientsList, setIngredientsList] = useState([]);
    const [newIngredient, setNewIngredient] = useState({
        idRef: '',
        name: '',
        units: '',
        value: 1
    });
    const [submit, setSubmit] = useState({});
    let history = useHistory();
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        const [ingredientsPromise, ingredientsController] = ingredientsListApi();
        ingredientsPromise()
            .then(res => setIngredientsList(res))
            .catch(error => console.log(error));
        return () => ingredientsController.abort();
    }, []);

    useEffect(() => {
        if(ingredientsList.length === 0) return;
        const { value, _id: idRef, ...params } =  ingredientsList[0];
        setNewIngredient(prevState => ({ ...prevState, ...params, idRef }));
    }, [ingredientsList]);

    useEffect(() => {
        if(Object.keys(submit).length === 0) return;
        const [updatePromise, updateController] = updateProduct(_id, submit, authContext.token);
        updatePromise()
            .then(res => history.push('/'))
            .catch(error => console.log(error));
        return () => updateController.abort();
    }, [submit, _id, authContext.token, history]);

    const areOnlyNumberAndDot = (value) => (/^\d*\.?\d*$/).test(value);
    const onSetName = (value) => setNameValue(value);
    const onSetPrice = (value) => areOnlyNumberAndDot(value) && setPriceValue(value);
    const onSetSale = (value) => setSaleValue(value);
    const onSetIngredient = (params) => {
        if (params?.hasOwnProperty('value') && !areOnlyNumberAndDot(params.value)) return;
        setNewIngredient(prevState => ({ ...prevState, ...params }));
    };
    const onAddIngredient = () => {
        setIngredientsValue(prevState => [...prevState, newIngredient]);
    };
    const onSubmit = (event) => {
        if(parseFloat(priceValue) > 0){
            setSubmit({
                name: nameValue,
                price: `${priceValue}€`,
                ingredients: ingredientsValue,
                sale: saleValue
            });
        }
        event.preventDefault();
    };

    return (
        <CardForm
            name={nameValue}
            onSetName={onSetName}
            price={priceValue}
            onSetPrice={onSetPrice}
            ingredients={ingredientsValue}
            sale={saleValue}
            onSetSale={onSetSale}
            newIngredient={newIngredient}
            setNewIngredient={onSetIngredient}
            ingredientsList={ingredientsList}
            onAddIngredient={() => onAddIngredient()}
            onSubmit={onSubmit}
        />
    )
}

ProductEdit.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    ingredients: PropTypes.array,
    sale: PropTypes.bool
};

export default WithProduct(ProductEdit);
