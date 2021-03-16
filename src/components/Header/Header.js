import { useContext } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LINK } from '../../constants/constants';
import { AuthenticationContext } from '../../App';

function Header() {
    let history = useHistory();
    const authContext = useContext(AuthenticationContext);
    const onOpenHome = () => history.push('/');
    const onOpenLoginForm = () => history.push(LINK.login);
    const onLogout = () => {
        authContext.setToken('');
        onOpenHome();
    };

    return (
        <header>
            <Navbar bg="light" expand="sm">
                <Navbar.Brand onClick={() => onOpenHome()}>Pastry shop</Navbar.Brand>
                {
                    authContext.token !== '' ?
                        <Button
                            variant="link"
                            className='admin-button'
                            onClick={() => onLogout()}
                        >Logout</Button> :
                        <Button
                            className='admin-button'
                            variant="light"
                            onClick={() => onOpenLoginForm()}
                        >Admin login</Button>
                }
            </Navbar>
        </header>
    )
}

export default Header;
