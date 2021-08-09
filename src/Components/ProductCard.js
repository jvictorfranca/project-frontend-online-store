import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <section data-testid="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt="Product Thumbnail" />
        <p>{price}</p>

      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired }).isRequired,

};

export default ProductCard;
