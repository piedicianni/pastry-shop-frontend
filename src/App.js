import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { recipes } from './services/requests/recipes';
import Header from './components/Header/Header';
import { LINK } from './constants/params';
import Login from './routes/Login';
import Home from './routes/Home';

export const AuthenticationContext = createContext();

function App() {
  const [token, setToken] = useState('');
  let history = useHistory();

  useEffect(() => {
    if(token === '') return;
    history.push('/');
  }, [token, history]);

  /* useEffect(() => {
    const [recipesPromise, recipesController] = recipes();
    recipesPromise()
      .then(res => console.log(res))
      .catch(error => console.log(error));
    return () => recipesController.abort();
  }, []); */

  return (
    <AuthenticationContext.Provider
      value={{
        token,
        setToken
      }}>
      <div className='App'>
        <Header />
        <Route exact path='/'><Home /></Route>
        <Route path={LINK.login}><Login /></Route>
      </div>
    </AuthenticationContext.Provider >
  );
}

export default App;