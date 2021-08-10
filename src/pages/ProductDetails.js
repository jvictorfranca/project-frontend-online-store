import React from 'react';
import CartButton from '../Components/CartButton';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.location.state.product;
    const test = api.getProductsFromCategoryAndQuery('LG K41s Dual Sim 32 Gb Preto 3 Gb Ram').then((result) => console.log(result));
  }

  render() {
    const { props } = this;
    const { state } = props.location;
    const { product } = state;
    console.log(product);
    const { id, title, thumbnail, price, sold_quantity } = product;
    return (
      <main>
        <CartButton />
        <p data-testid="product-detail-name">
          {`Name: ${title}`}
        </p>
        <p>
          {`ID: ${id}`}
        </p>

        <img src={ thumbnail } alt="Thumbnail" />

        <p>
          {`price: ${price}`}
        </p>

        <p>
          {`Sold: ${sold_quantity}`}
        </p>

      </main>
    );
  }
}

export default ProductDetails;
