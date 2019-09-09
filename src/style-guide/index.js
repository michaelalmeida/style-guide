import React from 'react';
import { Layout } from 'antd';

import GuideHeader from './header';
import GuideMenu from './menu';
import TypeFaceContainer from './components/typeface';

const { Content, Sider } = Layout;

const GuideHome = () => {
  return (
    <Layout style={{background: '#ffffff'}}>
      <Content style={{ padding: '0 50px', margin: '60px 0 0 0' }}>
        <GuideHeader />
        <Layout style={{ padding: '24px 0', background: '#fff',  border: '1px solid rgb(235, 237, 240)' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <GuideMenu />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <TypeFaceContainer />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
};

export default GuideHome;