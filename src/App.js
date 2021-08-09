import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import ProductsList from './Components/ProductsList';
import CategoryList from './Components/CategoryList';

function App() {
  return (
    <div className="App">
      <CategoryList />
      <BrowserRouter>
        <Route exact path="/" component={ ProductsList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
