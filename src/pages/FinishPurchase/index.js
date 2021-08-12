import React from 'react';
import PropTypes from 'prop-types';
import ProductCheckout from '../../Components/ProductCheckout';

import './styles.css';

class FinishPurchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.clickFinish = this.clickFinish.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  clickFinish() {
    const { name, email, cpf, phone, cep, address } = this.state;
    if (name.length > 0
      && email.length > 0
      && cpf.length > 0
      && phone.length > 0
      && cep.length > 0
      && address.length > 0) {
      this.setState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        address: '',
      });
    } else { console.log('Há campos vazios'); }
  }

  render() {
    const { props } = this;
    const { state } = props.location;
    const { products, sum } = state;
    const { name, email, cpf, phone, cep, address } = this.state;

    return (
      <main>
        <h2 className="verify-data"> Verify your purchase </h2>
        <table>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Total</th>
          </tr>
          {products.map((product) => (<ProductCheckout
            product={ product }
            key={ product.id }
          />))}
        </table>
        <p className="total">
          Total price:
          {' '}
          {sum}
        </p>
        <form>
          <h2 className="verify-data"> Buyer info: </h2>
          <label htmlFor="name">
            Name:
            {' '}
            <input
              type="text"
              name="name"
              id="name"
              data-testid="checkout-fullname"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="email">
            Email:
            {' '}
            <input
              type="text"
              name="email"
              id="email"
              data-testid="checkout-email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="cpf">
            CPF:
            {' '}
            <input
              type="text"
              name="cpf"
              id="cpf"
              data-testid="checkout-cpf"
              value={ cpf }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="phone">
            Phone:
            {' '}
            <input
              type="text"
              name="phone"
              id="phone"
              data-testid="checkout-phone"
              value={ phone }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="cep">
            CEP:
            {' '}
            <input
              type="text"
              name="cep"
              id="cep"
              data-testid="checkout-cep"
              value={ cep }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="address">
            Address:
            {' '}
            <input
              type="text"
              name="address"
              id="address"
              data-testid="checkout-address"
              value={ address }
              onChange={ this.handleChange }
            />
          </label>
        </form>

        <button onClick={ this.clickFinish } type="button"> Finish </button>
      </main>
    );
  }
}

FinishPurchase.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      sum: PropTypes.string.isRequired,
      products: PropTypes.arrayOf(PropTypes.object),

    }).isRequired,
  }).isRequired,

};

export default FinishPurchase;
