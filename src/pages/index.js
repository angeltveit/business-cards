import React, { Component } from 'react'
import page from 'page'
import Snap from './snap/snap.page'
import Save from './save/save.page'
import Navigation from '../components/navigation/navigation.component'

import CardList from './cards-list/cards-list.page'

function path(route, component) {
  page(route, () => {
    this.setState({ component })
  })
}

class ViewPort extends Component {
  constructor(props) {
    super(props)
    path = path.bind(this)
    this.state = {}
  }

  render() {
    path('/', <Snap />)
    path('/save', <Save />)
    path('/cards', <CardList />)
    page.start()
    return (
      <div className="Home">
        <Navigation />
        { this.state.component }
      </div>
    )
  }
}

export default ViewPort;
