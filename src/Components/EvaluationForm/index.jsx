import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class EvaluationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.onStarClick = this.onStarClick.bind(this);
    this.formAceppt = this.formAceppt.bind(this);
  }
  /*
  Biblioteca utilazada para fazer a avaliação
  fonte: https://www.npmjs.com/package/react-star-rating-component

  */

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  formAceppt(event) {
    event.preventDefault();
    console.log('cliclou');
  }

  render() {
    const { rating } = this.state;
    return (
      <form onSubmit={ this.formAceppt }>
        <h3>Avaliação</h3>
        <div>
          <label htmlFor="comment">

            <textarea type="text" id="comment" data-testid="product-detail-evaluation" />

          </label>
          <div className="starCamp">
            <p>Nota</p>
            <StarRatingComponent
              name="rate1"
              starCount={ 10 }
              value={ rating }
              onStarClick={ this.onStarClick }
            />
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    );
  }
}

export default EvaluationForm;
