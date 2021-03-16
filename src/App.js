import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { LINK } from './constants/constants';
import Login from './routes/Login';
import Home from './routes/Home';
import Product from './routes/Product';
import CreateProduct from './routes/CreateProduct';

export const AuthenticationContext = createContext();

function App() {
  const [token, setToken] = useState('');

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
        <Route path={LINK.product}><Product /></Route>
        <Route path={LINK.createProduct}><CreateProduct /></Route>
      </div>
    </AuthenticationContext.Provider >
  );
}

export default App;