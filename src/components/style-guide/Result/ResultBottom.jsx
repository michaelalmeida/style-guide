import React from 'react';
import { BottomBar } from './ResultStyles';
import CONSTANTS from '../../../constants';

import { Divider, Button } from 'antd';

const ResultBottom = props => {
  console.log(props);
  const { name, colors, typography, elements } = props;
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
        <Button type="link">
          `{CONSTANTS.RESULT_URL}/{props.id}`
        </Button>
      )}
      <Button onClick={() => props.save(payload)}>Save</Button>
    </BottomBar>
  );
};

export default ResultBottom;
