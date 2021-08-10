import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    };

    this.listaCategorias = this.listaCategorias.bind(this);
    this.onCallback = this.onCallback.bind(this);
  }

  componentDidMount() {
    this.listaCategorias();
  }

  // async handleRadio(name) {
  //   const updated = await api.getProductsFromCategoryAndQuery(name, '');
  //   console.log(name);
  //   return <ProductList products={ name } />;
  // }

  onCallback(event) {
    const elemento = event.target.value;
    console.log(elemento);
    const { callback } = this.props;
    callback(elemento);
  }

  async listaCategorias() {
    const CategoryNames = await api.getCategories();
    this.setState({
      categorias: CategoryNames,
    });
  }

  render() {
    const { categorias } = this.state;
    // const { setState } = this.props;
    return (
      <div>
        <ul>
          { categorias
            .map((obj) => (

              <li data-testid="category" key={ obj.id }>

                <label htmlFor={ obj.name }>{obj.name}</label>
                <input
                  onClick={ this.onCallback }
                  name="categoria"
                  type="radio"
                  id={ obj.name }
                  value={ obj.id }
                />

              </li>))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
