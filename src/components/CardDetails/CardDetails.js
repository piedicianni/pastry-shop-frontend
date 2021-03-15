import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CardDetails({ name, price, ingredients }) {
    return (
        <Card
            bg='dark'
            text='white'
            className="mb-2 card-details"
        >
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <div>
                    <p>Prezzo: {price}</p>
                </div>
            </Card.Body>
        </Card>
    )
}

CardDetails.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired
};

export default CardDetails;
