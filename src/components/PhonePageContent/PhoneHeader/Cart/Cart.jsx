import React from 'react';
import s from './Cart.module.scss';
import logo from './images/shopping-basket.png';

const Cart = () => {
  return (
      <div className={s.cart}>
          <div className={s.inner}>
              <img className={s.cartIcon} src={logo} alt=""/>
              <div className={s.marker}></div>
          </div>
      </div>
  );
};

export default Cart;