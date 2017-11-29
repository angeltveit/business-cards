import React, { Component } from 'react';
import store from '../../services/redux'
import page from 'page'

import './save.page.css';

class Save extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: store.getState().userReducer,
    }

    const card = store.getState().cardReducer
    if(card.image) {
      this.state.card = card
    } else {
      page('/')
    }

    this.update = this.update.bind(this)
    this.save = this.save.bind(this)

    store.subscribe(this.changed.bind(this))

  }

  componentWillMount() {

  }

  save() {
    store.dispatch({
      type: 'ADD_CARD',
      payload: this.state.card,
    })
    store.dispatch({
      type: 'CHANGE_CARD',
      payload: {},
    })
    page('/')
  }

  changed() {
    this.setState({card:  store.getState().cardReducer})
  }

  update(e) {
    //test
    store.dispatch({
      type: 'CHANGE_CARD',
      payload: {
        note: e.target.value
      },
    })
  }

  render() {
    if(!this.state.card.image) return page('/')
    return (
      <div>
        <h1>Saved!</h1>
        <img src={ this.state.card.image } />
        <p>Added by: { this.state.user.name }</p>
        <textarea onChange={ this.update } placeholder='Write some notes..'>
        </textarea>
        <button onClick={ this.save }>Save</button>
      </div>
    )
  }
}

export default Save;
