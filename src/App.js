import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import ProductsList from './Components/ProductsList';
import ShoppingCart from './Components/ShoppingCart';

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
