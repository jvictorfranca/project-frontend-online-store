import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

import './styles.css';

class ProductList extends React.Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      products.length === 0
        ? <p>Nenhum produto encontrado</p>
        : (
          <section className="products-list">
            {products.map((product) => (<ProductCard
              addToCart={ addToCart }
              product={ product }
              key={ product.id }
            />))}
          </section>
        )
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
