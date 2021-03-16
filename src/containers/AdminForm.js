import { useState, useEffect, useContext } from 'react';
import { Alert } from 'react-bootstrap';
import LoginForm from '../components/LoginForm/LoginForm';
import login from '../services/requests/login';
import { useHistory } from 'react-router-dom';
import { AuthenticationContext } from '../App';

function AdminForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [submit, setSubmit] = useState({});
    let history = useHistory();
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        const { email: emailValue, password: passwordValue } = submit;
        if (!emailValue || !passwordValue) return;
        const [loginPromise, loginController] = login(emailValue, passwordValue);
        const cbSetToken = authContext.setToken;
        loginPromise()
            .then(res => {
                cbSetToken(res.authorizationToken); 
                history.push('/');
            })
            .catch(error => setAlert(true));
        return () => loginController.abort();
    }, [submit, authContext.setToken, history]);

    const onSubmit = (event) => {
        setSubmit({ email, password });
        event.preventDefault();
    }

    return (
        <>
            {
                alert && (
                    <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
                        <Alert.Heading>Login error!</Alert.Heading>
                        <p>Unauthorized</p>
                    </Alert>)
            }
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={onSubmit}
            />
        </>
    )
}

export default AdminForm;
