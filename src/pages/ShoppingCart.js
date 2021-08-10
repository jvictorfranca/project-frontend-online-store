import React from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends React.Component {
  render() {
    // As constantes products e sum estão ai só para delimitar o padrão do Link.

    const products = [
      {
        title: 'camisa',
        price: 25,
        quant: 2,
      },
      {
        title: 'computador',
        price: 1000,
        quant: 1,
      },
      {
        title: 'calça',
        price: '50',
        quant: 3,

      },
    ];

    const sum = products.reduce(((acum, curr) => (curr.quant * curr.price) + acum), 0);

    return (
      <main>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <Link
          to={
            { pathname: '/finish',
              state: {
                products,
                sum,
              } }
          }
        >
          Finish  your purchase
        </Link>

      </main>

    );
  }
}
