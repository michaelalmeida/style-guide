import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  GlobalStyles,
  ResultTitle,
  FontSample,
  ColorCard,
} from './ResultStyles';
import { ElementSelected } from './ElementSelected';
import ResultBottom from './ResultBottom';

import { Typography, Row, Col, Empty } from 'antd';
const { Title } = Typography;

const Result = props => {
  const [guideName, setGuideName] = useState('Click to give me a name');

  const nameHandler = e => {
    setGuideName(e.target.value);
  };

  return (
    <>
      <GlobalStyles
        primaryColor={props.colors['first'].hex}
        secondaryColor={props.colors['second'].hex}
        primaryFont={props.typography[0]}
        secondaryFont={props.typography[1]}
      />
      <ResultTitle primaryColor={props.colors['first'].hex}>
        <input
          value={guideName}
          className="primary-font"
          onChange={nameHandler}
        />
      </ResultTitle>
      <Title style={{ marginTop: '50px' }}>Typography</Title>
      {props.typography.length > 0 ? (
        props.typography.map((font, index) => {
          return (
            <div
              className={index === 0 ? 'primary-font' : 'secondary-font'}
              key={index}
            >
              <Row gutter={16} style={{ marginTop: '50px' }}>
                <Col span={8}>
                  <FontSample>
                    Aa <small>{font}</small>
                  </FontSample>
                </Col>
                <Col span={16}>
                  <Title>h1. {font}</Title>
                  <Title level={2}>h2. {font}</Title>
                  <Title level={3}>h3. {font}</Title>
                  <Title level={4}>h4. {font}</Title>
                </Col>
              </Row>
            </div>
          );
        })
      ) : (
        <Empty description="You haven't selected any font yet" />
      )}
      <Title style={{ marginTop: '50px' }}>Colors</Title>
      <Row gutter={16} style={{ marginTop: '50px' }}>
        {Object.entries(props.colors).map(color => {
          return (
            <Col span={6} key={color[0]}>
              <ColorCard background={color[1].hex}></ColorCard>
              <p>{color[1].hex}</p>
              <p>
                rgb:{' '}
                {`${color[1].rgba.r}, ${color[1].rgba.g}, ${color[1].rgba.b}`}
              </p>
            </Col>
          );
        })}
      </Row>
      {props.elements.length > 0 && (
        <Title style={{ marginTop: '50px' }}>Elements</Title>
      )}
      {props.elements.map(element => {
        return (
          <Row gutter={16} key={element} style={{ marginBottom: '25px' }}>
            <ElementSelected element={element} />
          </Row>
        );
      })}
      <ResultBottom />
    </>
  );
};

Result.propTypes = {
  colors: PropTypes.object,
  fontList: PropTypes.arrayOf(PropTypes.object),
  typography: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = state => {
  return {
    colors: state.guide.colors,
    typography: state.guide.typography,
    elements: state.guide.elements,
  };
};

const ResultContainer = connect(mapStateToProps, null)(Result);

export default ResultContainer;
