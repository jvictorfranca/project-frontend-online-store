import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import ShoppingCart from './pages/ShoppingCart';
import ProductsList from './pages/ProductsList';
import CategoryList from './Components/CategoryList';

function App() {
  return (
    <div className="App">
      <CategoryList />
      <BrowserRouter>
        <Route exact path="/" component={ ProductsList } />
        <Route path="/cart" component={ ShoppingCart } />
      </BrowserRouter>
    </div>
  );
}

export default App;
