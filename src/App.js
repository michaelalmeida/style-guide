import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route, Switch } from "react-router-dom";

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import reducers from './reducers.js';

import TypeFaceContainer from './components/style-guide/typeface';
import PaletteContainer from './components/style-guide/palette';

import GuideMenu from './components/pages/menu';
import GuideHeader from './components/pages/header';

const { Content, Sider } = Layout;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <Layout style={{ background: '#ffffff' }}>
        <Content style={{ padding: '0 50px', margin: '60px 0 0 0' }}>
          <GuideHeader />
          <Layout style={{ padding: '24px 0', background: '#fff', border: '1px solid rgb(235, 237, 240)' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <GuideMenu />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Switch>
                <Route exact path="/" component={TypeFaceContainer} />
                <Route path="/typeface" component={TypeFaceContainer} />
                <Route path="/palette" component={PaletteContainer} />
              </Switch>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
