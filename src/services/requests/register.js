import { BASE_URL } from '../../constants/params';
import { fetchData, handlerError } from '../services';

const registerAdmin = (email = '', password = '') => {
    const [promise, controller] = fetchData(`${BASE_URL}/register`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });
    if (email === '' || password === '') return [() => handlerError({ error: 'Please insert email and password.' }), controller];
    return [promise, controller];
};
export default registerAdmin;