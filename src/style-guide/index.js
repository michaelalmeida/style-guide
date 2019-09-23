import React from 'react';
import { Layout } from 'antd';

import GuideHeader from './header';
import GuideMenu from './menu';
import TypeFaceContainer from './components/typeface';

const { Content, Sider } = Layout;

const GuideHome = () => {
  return (<TypeFaceContainer />)
};

export default GuideHome;