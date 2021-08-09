import React from 'react';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: 'none',
    };
  }

  render() {
    const { state } = this;
    const { searching } = state;
    return (
      <main data-testid="home-initial-message">
        {searching === 'none'
          ? <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          : <p>Lista de produtos a adicionar</p>}
      </main>
    );
  }
}

export default ProductsList;
