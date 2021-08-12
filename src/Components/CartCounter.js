import React from 'react';
import PropTypes from 'prop-types';

class CartCounter extends React.Component {
  render() {
    const { quant } = this.props;
    return (
      <div data-testid="shopping-cart-size">{quant}</div>
    );
  }
}

CartCounter.propTypes = {
  quant: PropTypes.number.isRequired,
};

export default CartCounter;
