import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import 'antd/dist/antd.css';

import reducers from './reducers.js';

import GuideHome from './style-guide/index';

var store = createStore(
  reducers,
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <GuideHome />
    </Provider>
  );
}

export default App;
