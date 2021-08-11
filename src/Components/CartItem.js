import React from 'react';
import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

const CartItem = ({
  id,
  name,
  price,
  quant,
  onClick,
  ...rest
}) => (
  <li id={ id } { ...rest }>
    <span data-testid="shopping-cart-product-name">{name}</span>
    <span data-testid="shopping-cart-product-quantity">{quant}</span>
    <button
      type="button"
      onClick={ onClick }
    >
      <FaCartPlus size="2em" />
    </button>
    <span>{price}</span>
  </li>
);

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quant: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartItem;
