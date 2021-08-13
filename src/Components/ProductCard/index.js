import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';
import { FaCartPlus } from 'react-icons/fa';

class ProductCard extends React.Component {
  freeShipping(shipping) {
    const { free_shipping: freeShipping } = shipping;

    if (freeShipping === true) {
      return <p data-testid="free-shipping">Frete Gratis </p>;
    }
    return <p />;
  }

  render() {
    const { product, addToCart, cart } = this.props;
    const { id, title, price, thumbnail, shipping } = product;
    const formattedPrice = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
    const cartNames = cart.map((cartProduct) => cartProduct.title);
    return (
      <section
        data-testid="product"
        className={ `product ${cartNames.includes(product.title) ? 'on-cart' : ''}` }
      >
        <h1>{title}</h1>
        <img src={ thumbnail } alt="Product Thumbnail" />
        <p>{formattedPrice}</p>
        {this.freeShipping(shipping)}

        <div className="info-cart-container">

          <Link
            to={
              { pathname: `/product/${id}`,
                state: { product } }
            }
            data-testid="product-detail-link"
          >
            More Info
          </Link>
          <button
            className="addcart-button"
            data-testid="product-add-to-cart"
            type="button"
            onClick={ () => addToCart(product) }
          >
            Add to cart
            <FaCartPlus size="2em" className="cart-icon" />
          </button>

        </div>

      </section>
    );
  }
}

ProductCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
    thumbnail: PropTypes.string.isRequired }).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default ProductCard;
