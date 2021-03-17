import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

function ReferenceForm({ email, setEmail, password, setPassword, onSubmit }) {

    return (
        <Form className='login-form' onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="outline-primary" type="submit">Submit</Button>
        </Form>
    )
}

ReferenceForm.propTypes = {
    email: PropTypes.string,
    setEmail: PropTypes.func.isRequired,
    password: PropTypes.string,
    setPassword: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default ReferenceForm;
