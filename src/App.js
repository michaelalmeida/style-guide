import React from 'react';

import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import 'antd/dist/antd.css';

import reducers from './reducers.js';

import GuideHome from './style-guide/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <GuideHome />
    </Provider>
  );
}

export default App;
