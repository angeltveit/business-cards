import React, { Component } from 'react';
import Camera from '../../components/camera/camera.component'
import store from '../../services/redux'
import page from 'page'
import './snap.page.css';


class Snap extends Component {
  constructor(props) {
    super(props)
    store.subscribe(this.update.bind(this))
    store.dispatch({
      type: 'LOAD',
    })
    this.card = store.getState().cardReducer
    this.cards = store.getState().cardsReducer
    this.setImage = this.setImage.bind(this)
  }
  update() {
    //store.getState().cardReducer

  }
  setImage(image) {
    store.dispatch({
      type: 'CHANGE_CARD',
      payload: { image },
    })
    page('/save')
  }
  render() {
    return (
      <div className="Snap">
        <h1>{ this.cards.length } saved cards</h1>
        <Camera setImage = { this.setImage } />
      </div>
    )
  }
}

export default Snap;
