import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaShoppingCart } from 'react-icons/fa';
import CartCounter from './CartCounter';

class CartButton extends React.Component {
  render() {
    const { quant } = this.props;
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <FaShoppingCart size="2em" />
        <CartCounter quant={ quant } />
      </Link>
    );
  }
}

CartButton.propTypes = {
  quant: PropTypes.number.isRequired };

export default CartButton;
