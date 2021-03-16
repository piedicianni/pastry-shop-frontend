import React from 'react';
import PropTypes from 'prop-types';
import CardLarge from '../CardLarge';

function CardDetails({ name, price, ingredients }) {
    return (
        <CardLarge
            header={name}
            bodyElement={
                <div>
                    <p>Prezzo: {price}</p>
                    <span>Lista ingredienti:</span>
                    <ul>
                        {
                            ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.name} {ingredient.value}{ingredient.units}</li>
                            ))
                        }
                    </ul>
                </div>
            } />
    )
}

CardDetails.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired
};

export default CardDetails;
