import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <section data-testid="product" className="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt="Product Thumbnail" />
        <p>{price}</p>
        <Link
          to={
            { pathname: `/product/${id}`,
              state: { product } }
          }
          data-testid="product-detail-link"
        >
          More Info
        </Link>

      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired }).isRequired,

};

export default ProductCard;
