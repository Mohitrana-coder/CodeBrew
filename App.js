console.disableYellowBox = true;
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Splash, reducer } from './codebrew';
const store = createStore(reducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Splash />
      </Provider>
    )
  }
}

export default App

