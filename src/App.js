import './App.css';
import Navbar from './components/Navbar';
import Store from './components/Store';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container mt-5 mb-3">
        <Routes>
          <Route path='/products' element={<Store />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Navigate to='/products' replace />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
