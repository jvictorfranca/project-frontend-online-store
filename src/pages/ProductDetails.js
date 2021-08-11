import React from 'react';
import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

import CartButton from '../Components/CartButton';
import EvaluationForm from '../Components/EvaluationForm';

class ProductDetails extends React.Component {
  freeShipping(shipping) {
    const { free_shipping: freeShipping } = shipping;
    console.log();
    if (freeShipping === true) {
      return <p data-testid="free-shipping">Frete Gratis </p>;
    }
    return <p />;
  }

  render() {
    const { props } = this;
    const { location: { state }, addToCart } = props;
    const { product } = state;
    const { id, title, thumbnail, price, shipping } = product;
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

        {this.freeShipping(shipping)}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(product) }
        >
          <FaCartPlus size="2em" />
        </button>

        <EvaluationForm />
      </main>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool.isRequired,
        }).isRequired,
      }),
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
