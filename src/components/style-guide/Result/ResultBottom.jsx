import React from 'react';
import { BottomBar } from './ResultStyles';
import CONSTANTS from '../../../constants';

import { Divider, Button } from 'antd';

const ResultBottom = props => {
  const { name, colors, typography, elements } = props.payload;
  const payload = {
    name,
    colors,
    typography,
    elements,
  };

  return (
    <BottomBar>
      <Divider />
      {props.id.length !== 0 && (
        <span>
          {CONSTANTS.RESULT_URL}
          {props.id}
        </span>
      )}
      <Button onClick={() => props.save(payload)}>Save</Button>
    </BottomBar>
  );
};

export default ResultBottom;
