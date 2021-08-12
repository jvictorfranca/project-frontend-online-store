import React from 'react';
import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

import CartButton from '../Components/CartButton';
import EvaluationForm from '../Components/EvaluationForm';
import './ProductDetailsStyle.css';

class ProductDetails extends React.Component {
  freeShipping(shipping) {
    const { free_shipping: freeShipping } = shipping;
    if (freeShipping === true) {
      return <p data-testid="free-shipping">Frete Gratis </p>;
    }
    return <p />;
  }

  render() {
    const { props } = this;
    const { location: { state }, addToCart } = props;
    const { product } = state;
    const { id, title, thumbnail, price, shipping, condition } = product;
    const marca = title;
    const condicao = condition;
    console.log(product);

    return (
      <main>
        <div className="header-box">
          <CartButton />
        </div>
        <div className="container-title">
          <p data-testid="product-detail-name" className="title-product">
            {`Name: ${title}`}
          </p>

          <p className="title-product hiden">
            {`ID: ${id}`}
          </p>
          <p className="title-product">
            {`Preço: $${price}`}
          </p>
        </div>
        <div className="container-img">
          <img src={ thumbnail } alt="Thumbnail" className="img-cart" />
          <div className="details">
            <h2>Detalhes</h2>
            <p>
              Marca:
              {marca}
            </p>
            <p>
              Condição:
              {condicao}
            </p>
          </div>
        </div>

        {this.freeShipping(shipping)}
        <button
          className="button-cart"
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(product) }
        >

          <FaCartPlus size="2em" />
          <p className="bnt-text">Adcionar ao carrinho</p>
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
        condition: PropTypes.string.isRequired,
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
