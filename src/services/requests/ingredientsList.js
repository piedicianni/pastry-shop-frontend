import { BASE_URL } from '../../constants/constants';
import { fetchData } from '../services';

const ingredientsList = () => {
    const [promise, controller] = fetchData(`${BASE_URL}/ingredients`, {
        method: 'GET'
    });
    return [promise, controller];
};

export default ingredientsList;