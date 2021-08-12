import React from 'react';
import PropTypes from 'prop-types';

class ProductCheckout extends React.Component {
  render() {
    const { product } = this.props;
    const { title, quant, price } = product;
    return (
      <li>
        <p>{title}</p>
        <p>
          x
          {quant}
        </p>
        <p>{price}</p>
        <p>
          total:
          {' '}
          {price * quant}
        </p>
      </li>
    );
  }
}

ProductCheckout.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quant: PropTypes.number.isRequired }).isRequired,

};

export default ProductCheckout;
