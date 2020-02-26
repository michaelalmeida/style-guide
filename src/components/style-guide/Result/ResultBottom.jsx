import React from 'react';
import { BottomBar } from './ResultStyles';
import { RESULT_URL } from '../../../constants';

import { Divider, Button } from 'antd';

const ResultBottom = props => {
  const { name, colors, typography, elements, isSaving } = props.payload;
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
          {RESULT_URL}
          {props.id}
        </span>
      )}
      <Button onClick={() => props.save(payload)} loading={isSaving}>
        Save
      </Button>
    </BottomBar>
  );
};

export default ResultBottom;
