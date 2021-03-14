import { BASE_URL } from '../../constants/params';
import { fetchData } from '../services';

const recipes = (adminToken = '') => {
    const [promise, controller] = fetchData(`${BASE_URL}/recipes`, {
        method: 'GET',
        ...(adminToken !== '' && {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            }
        })
    });
    return [promise, controller];
};
export {
    recipes
};