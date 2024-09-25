import React from 'react';
import products from './products';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price} руб.</p>
          <button onClick={() => addToCart(product)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
