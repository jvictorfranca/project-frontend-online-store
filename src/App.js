import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import ShoppingCart from './pages/ShoppingCart';
import ProductsList from './pages/ProductsList';
import CategoryList from './Components/CategoryList';
import ProductDetails from './pages/ProductDetails';

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
      </BrowserRouter>
    </div>
  );
}

export default App;
