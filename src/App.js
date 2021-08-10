import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import ShoppingCart from './pages/ShoppingCart';
import ProductsList from './pages/ProductsList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Route exact path="/" component={ ProductsList } />
        <Route path="/cart" component={ ShoppingCart } />
      </BrowserRouter>
    </div>
  );
}

export default App;
