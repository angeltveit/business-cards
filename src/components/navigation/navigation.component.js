import React, { Component } from 'react'
import './navigation.component.css'
import { connect } from 'react-redux'
import page from 'page'

@connect((store)=> {
  return {
    cards: store.cards,
  }
})
class Navigation extends Component {
  constructor(props) {
    super(props)
    this.isActive = this.isActive.bind(this)
  }
  page(path) {
    page(path)
  }
  isActive(name) {
    return name === window.location.pathname ? 'active' : ''
  }
  render() {
    return (
      <div className="navigation">
        <div
          className={"item " + this.isActive('/')}
          onClick={()=> page('/') }
        > Snap </div>
        <div
          className={"item " + this.isActive('/cards')}
          onClick={()=> page('/cards')}
        >
          <span>Business cards</span>
          <span className="count">{ this.props.cards.length}</span>
        </div>
      </div>
    )
  }
}

export default Navigation;
