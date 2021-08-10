import React from 'react';
import ProductList from '../Components/ProductList';
import CartButton from '../Components/CartButton';
import * as api from '../services/api';
import CategoryList from '../Components/CategoryList';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: '',
      category: '',
      products: [],
      doneSearching: false,
    };
    this.handleQuerry = this.handleQuerry.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.categorySearch = this.categorySearch.bind(this);
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
      products: updated.results,
      doneSearching: true,
    });
  }

  categorySearch(category) {
    this.setState({ category });
    const { searching } = this.state;
    api.getProductsFromCategoryAndQuery(category, searching).then((response) => {
      console.log(response);
      this.setState({
        products: response.results,
      });
    });
  }

  render() {
    const { state } = this;
    const { searching, products, doneSearching } = state;
    console.log(products);

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
        <CartButton />
        {searching === '' && category === ''
          ? <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          : <ProductList products={ products } />}

        <CategoryList callback={ this.categorySearch } />
      </main>
    );
  }
}

export default ProductsList;
