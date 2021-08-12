import React from 'react';
import PropTypes from 'prop-types';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

const CartItem = ({
  product: {
    id,
    title,
    price,
    available_quantity: availableQuantity,
    quant,
  },
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
      <FaTimesCircle size="2em" className="link-cart-icon" />
    </button>
    <span data-testid="shopping-cart-product-name">{title}</span>
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
      disabled={ quant >= availableQuantity }
      type="button"
      onClick={ onAddClick }
    >
      <FaPlusCircle size="2em" />
    </button>
    <span>{price}</span>
  </li>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    available_quantity: PropTypes.number.isRequired,
    quant: PropTypes.number.isRequired,
  }).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onSubClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default CartItem;
