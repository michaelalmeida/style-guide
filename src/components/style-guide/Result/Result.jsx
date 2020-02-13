import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { saveGuide, setName, getGuideFromDB } from '../../../redux/guide';
import { WARNINGS, SECTIONS } from './resultConstants';

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
  const { match } = props;
  const { getGuideFromDB } = props;

  const { TYPOGRAPHY, COLORS, ELEMENTS } = SECTIONS;

  useEffect(() => {
    if (typeof match.params.id !== 'undefined') {
      getGuideFromDB(match.params.id);
    }
  }, [match.params.id, getGuideFromDB]);

  const { id, name, colors, typography, elements } = props;

  const nameHandler = e => {
    props.setName(e.target.value);
  };

  return (
    <>
      <GlobalStyles
        primaryColor={colors['first'].hex}
        secondaryColor={colors['second'].hex}
        primaryFont={typography[0]}
        secondaryFont={typography[1]}
      />
      <ResultTitle primaryColor={colors['first'].hex}>
        <input
          value={name}
          className="primary-font"
          onChange={nameHandler}
          placeholder={WARNINGS.INPUT_NAME}
        />
      </ResultTitle>
      <Title style={{ marginTop: '50px' }}>{TYPOGRAPHY}</Title>
      {typography.length > 0 ? (
        typography.map((font, index) => {
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
        <Empty description={WARNINGS.NO_FONT} />
      )}
      <Title style={{ marginTop: '50px' }}>{COLORS}</Title>
      <Row gutter={16} style={{ marginTop: '50px' }}>
        {Object.entries(colors).map(color => {
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
      {elements.length > 0 && (
        <Title style={{ marginTop: '50px' }}>{ELEMENTS}</Title>
      )}
      {elements.map(element => {
        return (
          <Row gutter={16} key={element} style={{ marginBottom: '25px' }}>
            <ElementSelected element={element} />
          </Row>
        );
      })}
      <ResultBottom id={id} save={props.saveGuide} payload={props} />
    </>
  );
};

Result.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  colors: PropTypes.object,
  fontList: PropTypes.arrayOf(PropTypes.object),
  typography: PropTypes.arrayOf(PropTypes.string),
  isSaving: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    id: state.guide.id,
    name: state.guide.name,
    colors: state.guide.colors,
    typography: state.guide.typography,
    elements: state.guide.elements,
    isSaving: state.guide.isSaving,
  };
};

const mapDispathToProps = dispatch => {
  return {
    saveGuide: payload => {
      dispatch(saveGuide(payload));
    },
    setName: name => {
      dispatch(setName(name));
    },
    getGuideFromDB: id => {
      dispatch(getGuideFromDB(id));
    },
  };
};

const ResultContainer = connect(mapStateToProps, mapDispathToProps)(Result);

export default ResultContainer;
