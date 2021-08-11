import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';

export default class ShoppingCart extends React.Component {
  render() {
    const {
      cart,
      addToCart,
      subFromCart,
      removeFromCart,
      cartTotal,
    } = this.props;

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
            ? [
              ...cart.map((product) => (
                <CartItem
                  key={ product.id }
                  id={ product.id }
                  name={ product.title }
                  price={ product.price }
                  quant={ product.quant }
                  onAddClick={ () => addToCart(product) }
                  onSubClick={ () => subFromCart(product) }
                  onRemoveClick={ () => removeFromCart(product) }
                />
              )),
              <h3 key="totalPrice">
                Preço Total:
                { cartTotal }
              </h3>,
            ]
            : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        }
        <Link
          data-testid="checkout-products"
          to={
            { pathname: '/finish',
              state: {
                products: cart,
                sum: cartTotal,
              } }
          }
        >
          Finish  your purchase
        </Link>

      </>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartTotal: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  subFromCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};
