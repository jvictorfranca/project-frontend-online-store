import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import getCategories from './services/api';

import ProductsList from './Components/ProductsList';

function App() {
  getCategories();
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ ProductsList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
