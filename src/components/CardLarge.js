import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CardLarge({ header = 'Header', bodyElement }) {
    return (
        <Card
            bg='dark'
            text='white'
            className="mb-2 card-large"
        >
            <Card.Header>{header}</Card.Header>
            <Card.Body>{bodyElement}</Card.Body>
        </Card>
    )
}

CardLarge.propTypes = {
    header: PropTypes.string,
    bodyElement: PropTypes.element.isRequired
};

export default CardLarge;
