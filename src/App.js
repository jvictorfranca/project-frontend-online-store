import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import ProductsList from './pages/ProductsList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ ProductsList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
