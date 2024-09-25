import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import Header from './Header';
import { clear } from '@testing-library/user-event/dist/clear';

// Хук useState
function App() {
  const [cart, setCart] = useState([]);
// добавление в корзину
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  // удаление из корзины
  const clearCart = () => {
    setCart([]);
  }

  return (
    <Router>
      <div className="App">
        <Header cartItemCount={cart.length}/>
{/* Маршрутизация */}
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} clearCart={clearCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
