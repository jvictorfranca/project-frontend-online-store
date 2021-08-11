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
    });
  }

  render() {
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
            render={ () => <ShoppingCart addToCart={ this.addToCart } /> }
          />
          <Route
            path="/product/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/finish" component={ FinishPurchase } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
