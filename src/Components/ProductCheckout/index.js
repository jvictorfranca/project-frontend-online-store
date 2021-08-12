import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class ProductCheckout extends React.Component {
  render() {
    const { product } = this.props;
    const { title, quant, price } = product;
    return (
      <tr className="product-checkout-container">
        <td className="product-title">{title}</td>
        <td>
          x
          {quant}
        </td>
        <td>{price}</td>
        <td>
          {price * quant}
        </td>
      </tr>
    );
  }
}

ProductCheckout.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quant: PropTypes.string.isRequired }).isRequired,

};

export default ProductCheckout;
