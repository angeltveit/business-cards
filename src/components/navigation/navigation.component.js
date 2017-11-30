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
    this.page = this.page.bind(this)
  }
  componentWillMount() {
    this.isActive = this.isActive.bind(this)
  }
  page(path) {
    page(path)
    this.forceUpdate()
  }
  isActive(name) {
    console.log('is active?', name, window.location.pathname, name === window.location.pathname)
    return name === window.location.pathname ? 'active' : ''
  }
  render() {
    return (
      <div className="navigation">
        <div
          className={"item " + this.isActive('/')}
          onClick={()=> this.page('/') }
        > Snap </div>
        <div
          className={"item " + this.isActive('/cards')}
          onClick={()=> this.page('/cards')}
        >
          <span>Business cards</span>
          <span className="count">{ this.props.cards.length}</span>
        </div>
      </div>
    )
  }
}

export default Navigation;
