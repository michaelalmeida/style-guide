import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { setComponents } from '../../store/guideReducer';

import { Typography, Divider, Row, Col, Checkbox } from 'antd';

const { Title } = Typography;

const Elements = (props) => {
  const handlerCheck = (checkedValues) => {
    props.setComponents(checkedValues);
  };

  return (
    <div>
      <Title>Components</Title>
      <Divider />
      <p>Select all elements that you want to see in the final style guide.</p>
      <Checkbox.Group
        defaultValue={props.elements}
        style={{ width: '100%' }}
        onChange={handlerCheck}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Checkbox value="Card">Card</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Button">Button</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Form">Form</Checkbox>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Checkbox value="Tabs">Tabs</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Tag">Tag</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </div>
  );
};

Elements.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state) => {
  return {
    elements: state.guide.elements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setComponents: (elements) => {
      dispatch(setComponents(elements));
    },
  };
};

const ElementsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Elements);

export default ElementsContainer;
