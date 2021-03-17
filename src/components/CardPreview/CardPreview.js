import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function CardPreview({
    header,
    title,
    body,
    belowText,
    isAdmin = false,
    onClickDetails,
    onClickDelete = () => { }
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
                <Card.Text>{belowText}</Card.Text>
            </Card.Body>
            <div className='button-group'>
                <Button
                    variant={!isAdmin ? 'outline-light' : 'outline-warning'}
                    onClick={onClickDetails}
                >Dettaglio</Button>
                {
                    isAdmin && (
                        <Button
                            variant='outline-danger'
                            onClick={onClickDelete}
                        >Elimina</Button>
                    )
                }
            </div>
        </Card>
    )
}

CardPreview.propTypes = {
    header: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    belowText: PropTypes.string,
    isAdmin: PropTypes.bool,
    onClickDetails: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func
};

export default CardPreview;
