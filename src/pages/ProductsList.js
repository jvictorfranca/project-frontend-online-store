import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../Components/ProductList';
import CartButton from '../Components/CartButton';
import * as api from '../services/api';

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

  render() {
    const { state, props } = this;
    const { searching, products, doneSearching } = state;
    const { addToCart } = props;

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
        {doneSearching
          ? <ProductList addToCart={ addToCart } products={ products } />
          : <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>}
      </main>
    );
  }
}

ProductsList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
