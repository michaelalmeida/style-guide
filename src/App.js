import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';

import reducers from './reducers.js';

import GuideHome from './style-guide/index';

var store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <GuideHome />
    </Provider>
  );
}

export default App;
