import React from 'react';
import { Layout } from 'antd';

import GuideHeader from './pages/header';
import GuideMenu from './pages/menu';
import TypeFaceContainer from './components/typeface';

const { Content, Sider } = Layout;

const GuideHome = () => {
  return <TypeFaceContainer />;
};

export default GuideHome;
