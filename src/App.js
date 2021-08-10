import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import ShoppingCart from './pages/ShoppingCart';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import FinishPurchase from './pages/FinishPurchase';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Route exact path="/" component={ ProductsList } />
        <Route path="/cart" component={ ShoppingCart } />
        <Route
          path="/product/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route path="/finish" component={ FinishPurchase } />
      </BrowserRouter>
    </div>
  );
}

export default App;
