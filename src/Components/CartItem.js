import React from 'react';
import PropTypes from 'prop-types';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

const CartItem = ({
  id,
  name,
  price,
  quant,
  onAddClick,
  onSubClick,
  onRemoveClick,
  ...rest
}) => (
  <li id={ id } { ...rest }>
    <button
      type="button"
      onClick={ onRemoveClick }
    >
      <FaTimesCircle size="2em" />
    </button>
    <span data-testid="shopping-cart-product-name">{name}</span>
    <button
      data-testid="product-decrease-quantity"
      type="button"
      onClick={ onSubClick }
    >
      <FaMinusCircle size="2em" />
    </button>
    <span data-testid="shopping-cart-product-quantity">{quant}</span>
    <button
      data-testid="product-increase-quantity"
      type="button"
      onClick={ onAddClick }
    >
      <FaPlusCircle size="2em" />
    </button>
    <span>{price}</span>
  </li>
);

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quant: PropTypes.number.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onSubClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default CartItem;
