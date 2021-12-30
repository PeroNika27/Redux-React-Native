import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './src/reducers';
import CounterAction from './src/actions/CounterAction';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <CounterAction />
      </Provider>
    );
  }
}
