import React from 'react';
import PropTypes from 'prop-types';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import './style.css';

const CartItem = ({
  product: {
    id,
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
      <p>Apagar</p>
      <FaTimesCircle size="2em" />
    </button>
    <span data-testid="shopping-cart-product-name" className="cart-i" />
    <button
      data-testid="product-decrease-quantity"
      type="button"
      onClick={ onSubClick }
    >
      <p>Retirar</p>
      <FaMinusCircle size="2em" />
    </button>

    <button
      data-testid="product-increase-quantity"
      disabled={ quant >= availableQuantity }
      type="button"
      onClick={ onAddClick }
    >
      <p>Adcionar</p>
      <FaPlusCircle size="2em" />
    </button>

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
