import React from 'react';

const Cart = ({ cartItems, clearCart }) => {
  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} руб.
            </li>
          ))}
        </ul>
        <button onClick={clearCart} className='clear-cart-button'>Очистить корзину</button>
        </>
      )}
    </div>
  );
};

export default Cart;
