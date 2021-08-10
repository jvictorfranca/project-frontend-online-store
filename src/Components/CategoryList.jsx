import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    return (
      <div>
        <ul>
          { categorias
            .map((obj) => (

              <li key={ obj.id }>

                <label htmlFor={ obj.name }>{obj.name}</label>
                <input
                  data-testid="category"
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

CategoryList.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default CategoryList;
