import React from 'react';
import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

class ProductCard extends React.Component {
  render() {
    const { product, addToCart } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <section data-testid="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt="Product Thumbnail" />
        <p>{price}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(product) }
        >
          <FaCartPlus size="2em" />
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired }).isRequired,

};

export default ProductCard;
