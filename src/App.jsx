import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Routing from './Routing';
import GuideMenu from './components/pages/menu';
import GuideHeader from './components/pages/header';

const { Content, Sider } = Layout;

function App() {
  return (
    <Provider store={store}>
      <div data-test="component-app">
        <Layout style={{ background: '#ffffff' }}>
          <Content
            style={{ padding: '0 50px', margin: '60px auto', width: '1024px' }}
          >
            <GuideHeader />
            <Layout
              style={{
                padding: '24px 0',
                background: '#fff',
                border: '1px solid rgb(235, 237, 240)',
              }}
            >
              <Sider width={200} style={{ background: '#fff' }}>
                <GuideMenu />
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Routing />
              </Content>
            </Layout>
          </Content>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
