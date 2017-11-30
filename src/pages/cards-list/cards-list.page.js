import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCards } from '../../services/redux/actions/card'
import Card from '../../components/card/card.component'

import './cards-list.page.css';

@connect((store)=> {
  return {
    cards: store.cards,
  }
})
class CardsList extends Component {
  constructor(props) {
    super(props)
    if(!this.props.cards.length) {
      this.props.dispatch(getCards())
    }
    console.log(this.props.cards)
  }
  render() {
    const cards = this.props.cards.map(card => {
      return <div className="item">{ <Card card={card} /> }</div>
    })
    return (
      <div className="cards">
          { cards }
      </div>
    )
  }
}

export default CardsList;
