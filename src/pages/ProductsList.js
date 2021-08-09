import React from 'react';
import ProductList from '../Components/ProductList';
import * as api from '../services/api';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: '',
      category: '',
      products: [],
    };
    this.handleQuerry = this.handleQuerry.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleQuerry(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  async handleButton() {
    const { searching, category } = this.state;
    const updated = await api.getProductsFromCategoryAndQuery(category, searching);
    this.setState({
      products: updated.results });
  }

  render() {
    const { state } = this;
    const { searching, category, products } = state;

    return (
      <main data-testid="home-initial-message">
        <input
          type="text"
          onChange={ this.handleQuerry }
          value={ searching }
          name="searching"
          data-testid="query-input"
        />
        <button
          onClick={ this.handleButton }
          type="button"
          data-testid="query-button"
        >
          Click
        </button>
        {searching === '' && category === ''
          ? <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          : <ProductList products={ products } />}
      </main>
    );
  }
}

export default ProductsList;
