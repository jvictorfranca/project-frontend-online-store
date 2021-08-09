import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    };

    this.listaCategorias = this.listaCategorias.bind(this);
    this.listaCategorias();
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
            .map((obj) => <li data-testid="category" key={ obj.id }>{obj.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
