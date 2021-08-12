import React from 'react';
import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

import DetailsItem from '../Components/DetailsItem/index';
import CartButton from '../Components/CartButton/index';
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
    const { location: { state }, addToCart, quant, subFromCart, removeFromCart } = props;
    const { product } = state;
    const { id, title, thumbnail, price, shipping, condition } = product;
    const marca = title;
    const { cartTotal } = this.props;
    const condicao = condition;
    console.log(product);

    return (
      <main>
        <CartButton quant={ quant } />
        <p data-testid="product-detail-name">
          {`Name: ${title}`}
        </p>
        <p>
          {`ID: ${id}`}
        </p>

        <p className="title-product hiden">
          {`ID: ${id}`}
        </p>
        <p className="title-product">
          {`Preço: $${price}`}
        </p>

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
        <div className="section-carrinho">
          <h2>
            Carrinho
            <FaCartPlus size="2em" />
          </h2>
          <h3>
            Preço do carrinho:
            { cartTotal }
            {' '}
            <br />
            Quantidade:
            {quant}
          </h3>
          <div className="bnts-cart">
            <DetailsItem
              key={ product.id }
              product={ product }
              onAddClick={ () => addToCart(product) }
              onSubClick={ () => subFromCart(product) }
              onRemoveClick={ () => removeFromCart(product) }
            />
          </div>
        </div>

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
  quant: PropTypes.number.isRequired,
  subFromCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  cartTotal: PropTypes.string.isRequired,
};

export default ProductDetails;
