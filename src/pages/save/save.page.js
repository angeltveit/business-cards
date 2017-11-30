import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateCard, saveCard } from '../../services/redux/actions/card'
import store from '../../services/redux'
import page from 'page'

import './save.page.css';

@connect((store)=> {
  return {
    user: store.user,
    card: store.card,
  }
})
class Save extends Component {
  constructor(props) {
    super(props)
    if(!this.props.card.image) {
      page('/')
    }
    this.update = this.update.bind(this)
    this.save = this.save.bind(this)
  }

  save() {
    this.props.dispatch(saveCard(this.props.card))
    page('/')
  }

  update(e) {
    this.props.dispatch(updateCard({
      note: e.target.value,
    }))
  }

  render() {
    return (
      <div>
        <h1>Saved!</h1>
        <img src={ this.props.card.image } />
        <p>Added by: { this.props.user.name }</p>
        <textarea onChange={ this.update } placeholder='Write some notes..'>
        </textarea>
        <button onClick={ this.save }>Save</button>
      </div>
    )
  }
}

export default Save;
