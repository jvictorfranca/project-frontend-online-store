import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      products.length === 0
        ? <p>Nenhum produto encontrado</p>
        : (
          <section>
            {products.map((product) => (<ProductCard
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

};

export default ProductList;
