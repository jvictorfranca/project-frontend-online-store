import React from 'react';
import PropTypes from 'prop-types';

import CartButton from '../Components/CartButton';
import EvaluationForm from '../Components/EvaluationForm';

// import * as api from '../services/api';

class ProductDetails extends React.Component {
  render() {
    const { props } = this;
    const { state } = props.location;
    const { product } = state;
    // console.log(product);
    const { id, title, thumbnail, price } = product;
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
      }),
    }),
  }).isRequired,

};

export default ProductDetails;
