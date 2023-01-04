import './App.css';
import { useEffect } from 'react';
import Home from './components/Home';
import { productAction } from './store/slice/productSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/product/allproduct').then((res) => {
      console.log(res.data);
      dispatch(productAction.saveProduct(res.data));
    });
  }, []);
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
