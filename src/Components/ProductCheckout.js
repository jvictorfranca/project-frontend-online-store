import React from 'react';

class ProductCheckout extends React.Component {
  render() {
    const { product } = this.props;
    const { name, quant, price } = product;
    return (
      <li>
        <p>{name}</p>
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

export default ProductCheckout;
