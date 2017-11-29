import React, { Component } from 'react'
import page from 'page'

import Snap from './snap/snap.page'
import Save from './save/save.page'

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
    page.start()
    return (
      <div className="Home">
        { this.state.component }
      </div>
    )
  }
}

export default ViewPort;
