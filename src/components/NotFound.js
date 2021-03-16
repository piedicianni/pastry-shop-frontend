import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function NotFound({ message = 'Not found!' }) {
    return (
        <Alert variant='warning'>{message}</Alert>
    )
}

NotFound.propTypes = {
    message: PropTypes.string
};

export default NotFound;
