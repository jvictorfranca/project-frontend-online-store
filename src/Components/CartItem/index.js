import React from 'react';
import PropTypes from 'prop-types';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

import './styles.css';

const CartItem = ({
  product: {
    id,
    title,
    thumbnail,
    price,
    available_quantity: availableQuantity,
    quant,
  },
  onAddClick,
  onSubClick,
  onRemoveClick,
  ...rest
}) => (
  <li id={ id } className="cart-item-container" { ...rest }>
    <button
      className="btn remove"
      type="button"
      onClick={ onRemoveClick }
    >
      <FaTimesCircle size="2em" />
    </button>
    <img src={ thumbnail } alt={ title } className="item-thumbnail" />
    <span className="item-name" data-testid="shopping-cart-product-name">{title}</span>
    <div className="cart-item-control">
      <button
        className="btn"
        data-testid="product-decrease-quantity"
        type="button"
        onClick={ onSubClick }
      >
        <FaMinusCircle size="2em" />
      </button>
      <span
        className="item-quantity"
        data-testid="shopping-cart-product-quantity"
      >
        {quant}
      </span>
      <button
        className="btn"
        data-testid="product-increase-quantity"
        disabled={ quant >= availableQuantity }
        type="button"
        onClick={ onAddClick }
      >
        <FaPlusCircle size="2em" />
      </button>
    </div>
    <span className="item-price">
      { Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price) }
    </span>
  </li>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    available_quantity: PropTypes.number.isRequired,
    quant: PropTypes.number.isRequired,
  }).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onSubClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default CartItem;
