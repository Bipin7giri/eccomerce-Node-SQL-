/** @format */

import Home from './pages/Home';
import './scss/style.scss';
import ProductDetails from './container/ProductDetails';
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './container/Cart';
import Register from './container/Register';
import Login from './container/Login';
import History from './pages/History';
function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/productdetails/:id'
          element={<ProductDetails />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/history'
          element={<History />}
        />
      </Routes>
    </div>
  );
}

export default App;
