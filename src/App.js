import React, { Component } from 'react';
import { Provider } from 'react-redux'
import ViewPort from './pages'

import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ViewPort />
      </Provider>
    )
  }
}

export default App;
