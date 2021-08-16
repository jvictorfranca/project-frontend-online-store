import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart, FaReply } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartItem from '../../Components/CartItem';

import './styles.css';

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
        <header className="cart-header">
          <Link to="/project-frontend-online-store">
            <FaReply size="2em" />
          </Link>
          <span>
            <FaShoppingCart className="link-cart-icon" size="2em" />
          </span>
          <h1>Carrinho de Compras</h1>
        </header>
        <ul className="cart-items-list">
          {
            cart.length
              ? [
                ...cart.map((product) => (
                  <CartItem
                    key={ product.id }
                    product={ product }
                    onAddClick={ () => addToCart(product) }
                    onSubClick={ () => subFromCart(product) }
                    onRemoveClick={ () => removeFromCart(product) }
                  />
                )),
                <h3 key="totalPrice">
                  { `Valor Total da Compra: ${cartTotal}` }
                </h3>,
                <Link
                  key="checkout"
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
                </Link>,
              ]
              : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          }
        </ul>
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
