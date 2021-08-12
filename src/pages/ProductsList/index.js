import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../../Components/ProductList';
import CartButton from '../../Components/CartButton';
import * as api from '../../services/api';
import CategoryList from '../../Components/CategoryList';

import './styles.css';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: '',
      category: '',
      products: [],
      doneSearching: false,
      sorted: '',
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
      this.setState({
        doneSearching: true,
        products: response.results,
      });
    });
  }

  sortProducts(array) {
    const { sorted } = this.state;
    if (sorted === 'ascending') {
      array.sort((a, b) => a.price - b.price);
    } else if (sorted === 'descending') {
      array.sort((a, b) => b.price - a.price);
    }
  }

  render() {
    const { state, props } = this;
    const { searching, products, doneSearching, sorted } = state;
    const { addToCart, quant, cart } = props;
    this.sortProducts(products);

    return (
      <main data-testid="home-initial-message" className="main-container">
        <section className="search-container">
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
            Search
          </button>
          <select
            name="sorted"
            id="sorted"
            value={ sorted }
            onChange={ this.handleQuerry }
          >
            <option value="">Select by price</option>
            <option value="ascending">Ascending price</option>
            <option value="descending">Descending price</option>

          </select>
          <CartButton quant={ quant } />
        </section>
        <section className="products-category-container">

          {doneSearching
            ? <ProductList addToCart={ addToCart } products={ products } cart={ cart } />
            : (
              <p
                className="empty-search-text"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )}

          <aside className="category-container">
            <CategoryList callback={ this.categorySearch } />
          </aside>

        </section>

      </main>
    );
  }
}

ProductsList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  quant: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsList;
