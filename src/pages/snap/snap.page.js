import React, { Component } from 'react'
import Camera from '../../components/camera/camera.component'
import store from '../../services/redux'
import { getCards } from '../../services/redux/actions'
import { connect } from 'react-redux'
import page from 'page'
import './snap.page.css'

@connect((store)=> {
  console.log(store)
  return {
    user: store.user,
    card: store.card,
    cards: store.cards,
  }
})
class Snap extends Component {
  constructor(props) {
    super(props)
    this.setImage = this.setImage.bind(this)
  }
  componentWillMount() {
    this.props.dispatch(getCards())
  }
  update() {
    //store.getState().cardReducer
  }
  setImage(image) {
    alert('done')
    return
    store.dispatch({
      type: 'CHANGE_CARD',
      payload: { image },
    })
    page('/save')
  }
  render() {
    return (
      <div className="Snap">
        <h1>{ this.props.cards.length } saved cards</h1>
        <Camera setImage = { this.setImage } />
      </div>
    )
  }
}

export default Snap;
