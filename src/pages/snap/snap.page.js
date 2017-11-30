import React, { Component } from 'react'
import Camera from '../../components/camera/camera.component'
import store from '../../services/redux'
import { getCards, updateCard } from '../../services/redux/actions/card'
import { connect } from 'react-redux'
import page from 'page'
import './snap.page.css'

@connect((store)=> {
  console.log(store)
  return {
    user: store.user,
    card: store.card,
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
  setImage(image) {
    this.props.dispatch(updateCard({ image }))
    page('/save')
  }
  render() {
    return (
      <div className="snap">
        <Camera setImage = { this.setImage } />
      </div>
    )
  }
}

export default Snap;
