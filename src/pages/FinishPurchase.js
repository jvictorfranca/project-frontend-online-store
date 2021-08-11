import React from 'react';
import PropTypes from 'prop-types';
import ProductCheckout from '../Components/ProductCheckout';

class FinishPurchase extends React.Component {
  render() {
    const { props } = this;
    const { state } = props.location;
    const { products, sum } = state;
    console.log(products);

    return (
      <main>
        <ul>
          {products.map((product) => (<ProductCheckout
            product={ product }
            key={ product.id }
          />))}
        </ul>
        <form>
          <label htmlFor="name">
            Name:
            {' '}
            <input type="text" name="name" id="name" data-testid="checkout-fullname" />
          </label>

          <label htmlFor="email">
            Email:
            {' '}
            <input type="text" name="email" id="email" data-testid="checkout-email" />
          </label>

          <label htmlFor="cpf">
            CPF:
            {' '}
            <input type="text" name="cpf" id="cpf" data-testid="checkout-cpf" />
          </label>

          <label htmlFor="phone">
            Phone:
            {' '}
            <input type="text" name="phone" id="phone" data-testid="checkout-phone" />
          </label>

          <label htmlFor="cep">
            CEP:
            {' '}
            <input type="text" name="cep" id="cep" data-testid="checkout-cep" />
          </label>

          <label htmlFor="adress">
            Adress:
            {' '}
            <input type="text" name="adress" id="adress" data-testid="checkout-adress" />
          </label>
        </form>
        Total price:
        {' '}
        {sum}
      </main>
    );
  }
}

FinishPurchase.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quant: PropTypes.string.isRequired }).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({
      sum: PropTypes.number.isRequired,
      products: PropTypes.arrayOf(PropTypes.object),

    }).isRequired,
  }).isRequired,

};

export default FinishPurchase;
