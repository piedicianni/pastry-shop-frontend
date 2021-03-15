import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function CardPreview({
    header = 'Header',
    title = 'Title',
    body = 'Message',
    editButton = false,
    onClickDetails
}) {
    return (
        <Card
            bg='dark'
            text='white'
            className="mb-2 card-preview"
        >
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <div className='button-group'>
                    <Button variant='outline-light' onClick={onClickDetails}>Dettaglio</Button>
                    {
                        editButton && (
                            <Button variant='outline-warning'>Modifica</Button>
                        )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

CardPreview.propTypes = {
    header: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    editButton: PropTypes.bool,
    onClickDetails: PropTypes.func.isRequired
};

export default CardPreview;
