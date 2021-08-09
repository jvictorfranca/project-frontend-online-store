import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = () => (
  <Link to="/cart" data-testid="shopping-cart-button">
    <FaShoppingCart size="2em" />
  </Link>
);

export default CartButton;
