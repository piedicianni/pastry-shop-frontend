import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

function LoginForm({ email, setEmail, password, setPassword, onSubmit }) {

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
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

LoginForm.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm;
