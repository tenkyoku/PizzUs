import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from './cartIcon.png'


const Header = ({cartItemCount}) => {
  return (
    <header>
        <div className='logo'>
            <h1>
              <Link to='/' className='logo-name'>PizzUs</Link>
            </h1>
        </div>
        <nav>
          <Link to="/">Каталог товаров</Link>
          <Link to="/cart">
            <img src={cartIcon} alt='Cart' className='cart-icon'/>
            {cartItemCount > 0 && <span className='cart-count'>{cartItemCount}</span>}
          </Link>
        </nav>
    </header>
  );
};

export default Header;