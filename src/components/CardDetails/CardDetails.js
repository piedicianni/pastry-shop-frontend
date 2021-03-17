import React from 'react';
import PropTypes from 'prop-types';
import CardLarge from '../CardLarge';

function CardDetails({ name, price, ingredients, availability }) {
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
                    <p>Disponibilità: {availability}</p>
                </div>
            } />
    )
}

CardDetails.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    ingredients: PropTypes.array,
    availability: PropTypes.number
};

export default CardDetails;
