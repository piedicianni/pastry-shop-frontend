import React from 'react';
import PropTypes from 'prop-types';

function CardCreate({ onClick }) {
    return (
        <div
            className='card-create'
            onClick={onClick}
        >
            <p>Aggiungi nuovo<br></br>prodotto</p>
        </div>
    )
}

CardCreate.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CardCreate;
