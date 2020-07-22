import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
