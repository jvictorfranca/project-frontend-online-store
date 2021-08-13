import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

import { FaShoppingCart } from 'react-icons/fa';

class CartButton extends React.Component {
  render() {
    const { quant } = this.props;
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <FaShoppingCart size="2em" className="link-cart-icon" />
        <div data-testid="shopping-cart-size">{quant}</div>
      </Link>
    );
  }
}

CartButton.propTypes = {
  quant: PropTypes.number.isRequired };

export default CartButton;
