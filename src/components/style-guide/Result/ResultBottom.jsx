import React from 'react';
import { BottomBar } from './ResultStyles';

import { Divider, Button } from 'antd';

const ResultBottom = () => {
  return (
    <BottomBar>
      <Divider />
      <Button>Save</Button>
    </BottomBar>
  );
};

export default ResultBottom;
