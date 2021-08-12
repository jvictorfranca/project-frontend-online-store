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
      quant: 0,
    };
  }

  componentDidMount() {
    this.getStateFromLocalStorage();
  }

  componentDidUpdate() {
    this.updateLocalStorage();
  }

  addToCart = (product) => {
    const { cart: prevCart } = this.state;
    const findIndexNotFoundNumber = -1;
    const existsProduct = prevCart.findIndex(({ id }) => product.id === id);

    if (existsProduct !== findIndexNotFoundNumber) {
      if (prevCart[existsProduct].quant < prevCart[existsProduct].available_quantity) {
        prevCart[existsProduct].quant += 1;
      }
    } else {
      prevCart.push({
        ...product,
        quant: 1,
      });
    }

    this.setState({
      cart: prevCart,
      total: this.cartTotal(prevCart),
      quant: this.cartQuantity(prevCart),
    });
    this.animateButton();
  }

  removeFromCart = (product) => {
    const { cart: prevCart } = this.state;
    const newCart = prevCart.filter(({ id }) => id !== product.id);

    this.setState({
      cart: newCart,
      total: this.cartTotal(newCart),
      quant: this.cartQuantity(newCart),
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
      quant: this.cartQuantity(prevCart),
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

  getStateFromLocalStorage = () => {
    if (localStorage.shoppingCart) {
      const { shoppingCart } = localStorage;
      const shoppingCartObject = JSON.parse(shoppingCart);
      const { cart, total, quant } = shoppingCartObject;
      this.setState({
        cart,
        total,
        quant,
      });
    }
  }

  cartQuantity = (cart) => cart.reduce(((sum, product) => product.quant + sum), 0)

  updateLocalStorage = () => {
    const { state } = this;
    const object = JSON.stringify(state);
    localStorage.shoppingCart = object;
  }

  animateButton() {
    const oi = document.getElementsByClassName('link-cart-icon');

    if (!oi[0].classList.contains('animated')) {
      oi[0].classList.add('animated');
      const ONEANDAHALF_SECONDS = 1500;
      setTimeout(() => {
        oi[0].classList.remove('animated');
      }, ONEANDAHALF_SECONDS);
    }
  }

  render() {
    const { cart, total, quant } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={ () => (<ProductsList
              addToCart={ this.addToCart }
              quant={ quant }
              cart={ cart }
            />) }
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
              (props) => (<ProductDetails
                removeFromCart={ this.removeFromCart }
                subFromCart={ this.subFromCart }
                addToCart={ this.addToCart }
                cart={ cart }
                cartTotal={ total }
                { ...props }
                quant={ quant }
              />)
            }
          />
          <Route path="/finish" component={ FinishPurchase } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
