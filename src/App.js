import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import ShoppingCart from './pages/ShoppingCart';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import FinishPurchase from './pages/FinishPurchase';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      total: '',
    };
  }

  addToCart = (product) => {
    const { cart: prevCart } = this.state;
    const findIndexNotFoundNumber = -1;
    const existsProduct = prevCart.findIndex(({ id }) => product.id === id);

    if (existsProduct !== findIndexNotFoundNumber) {
      prevCart[existsProduct].quant += 1;
    } else {
      prevCart.push({
        ...product,
        quant: 1,
      });
    }

    this.setState({
      cart: prevCart,
      total: this.cartTotal(prevCart),
    });
  }

  removeFromCart = (product) => {
    const { cart: prevCart } = this.state;
    const newCart = prevCart.filter(({ id }) => id !== product.id);

    this.setState({
      cart: newCart,
      total: this.cartTotal(newCart),
    });
  }

  subFromCart = (product) => {
    const { cart: prevCart } = this.state;

    if (product.quant <= 1) {
      return this.removeFromCart(product);
    }

    const newCart = prevCart.map((prevProduct) => {
      if (prevProduct.id === product.id) {
        return {
          ...prevProduct,
          quant: prevProduct.quant - 1,
        };
      }

      return prevProduct;
    });

    this.setState({
      cart: newCart,
      total: this.cartTotal(newCart),
    });
  }

  cartTotal = (cart) => {
    const totalPrice = cart
      .reduce((total, { price, quant }) => total + (price * quant), 0);

    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(totalPrice);
  }

  render() {
    const { cart, total } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={ () => <ProductsList addToCart={ this.addToCart } /> }
          />
          <Route
            path="/cart"
            render={ () => (<ShoppingCart
              cartTotal={ total }
              addToCart={ this.addToCart }
              subFromCart={ this.subFromCart }
              removeFromCart={ this.removeFromCart }
              cart={ cart }
            />) }
          />
          <Route
            path="/product/:id"
            render={
              (props) => <ProductDetails addToCart={ this.addToCart } { ...props } />
            }
          />
          <Route path="/finish" component={ FinishPurchase } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
