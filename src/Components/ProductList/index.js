import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

import './styles.css';

class ProductList extends React.Component {
  render() {
    const { products, addToCart, cart } = this.props;
    return (
      products.length === 0
        ? <p>Nenhum produto encontrado</p>
        : (
          <section className="products-list">
            {products.map((product) => (<ProductCard
              addToCart={ addToCart }
              product={ product }
              key={ product.id }
              cart={ cart }
            />))}
          </section>
        )
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
