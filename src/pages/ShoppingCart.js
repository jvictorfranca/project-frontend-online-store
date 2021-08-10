import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: props.cart,
    };
  }

  render() {
    const { cart } = this.state;
    const { addToCart } = this.props;

    return (
      <>
        <Link to="/">Voltar para Home</Link>
        <div>
          <span>
            <FaShoppingCart size="2em" />
          </span>
          <h1>Carrinho de Compras</h1>
        </div>
        {
          cart.length
            ? cart.map((product) => (
              <CartItem
                key={ product.id }
                id={ product.id }
                name={ product.title }
                price={ product.price }
                quant={ product.quant }
                onClick={ () => addToCart(product) }
              />
            ))
            : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        }
      </>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};
