import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Todo from './src/components/TodoComponent';
import rootReducer from './src/reducers/rootReducer';

const store = createStore(rootReducer);
const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);
export default App;
