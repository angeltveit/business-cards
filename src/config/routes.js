import React from 'react'
import Snap from '../pages/snap/snap.page'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Routes = () => (
  <Router>
    <Route path='/' component={Snap} />
  </Router>
)

export default Routes
