import React, { Component } from 'react';
import './card.component.css';

class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="card">
        <img className="card-image" src={ this.props.card.image } />
        <p className="note"> { this.props.card.note} </p>
      </div>
    )
  }
}

export default Card;
