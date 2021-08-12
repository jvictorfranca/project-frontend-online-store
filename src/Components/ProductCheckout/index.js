import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class ProductCheckout extends React.Component {
  render() {
    const { product } = this.props;
    const { title, quant, price } = product;
    const total = price * quant;
    const formattedPrice = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
    const formattedTotal = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(total);
    return (
      <tr className="product-checkout-container">
        <td className="product-title">{title}</td>
        <td>
          x
          {quant}
        </td>
        <td>{formattedPrice}</td>
        <td>
          {formattedTotal}
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
