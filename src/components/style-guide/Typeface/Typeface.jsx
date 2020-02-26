import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { API_REQUESTS } from '../../../constants';
import { WARNINGS, BUTTONS } from './typeFaceConstants';

import {
  Typography,
  Select,
  Divider,
  Icon,
  Row,
  Col,
  Alert,
  Button,
  message,
} from 'antd';

import { getFonts, setTypography } from '../../../redux/guide';

const { Title } = Typography;
const { Option } = Select;

class Typeface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontList: [],
      typography: [],
      showErrorMessage: false,
      blockSubmit: true,
    };
  }

  componentDidMount() {
    this.props.getFonts(API_REQUESTS.FONTS);
  }

  handleFontListSelect = value => {
    this.checkSelectLimit(value.length);
    this.setState({
      typography: value,
    });
  };

  checkSelectLimit = selected => {
    if (selected > 2) {
      this.errorMessage(true);
      this.blockSubmit(true);
    } else if (selected === 1 || selected === 2) {
      this.errorMessage(false);
      this.blockSubmit(false);
    }
  };

  errorMessage = validation => {
    this.setState({ showErrorMessage: validation });
  };

  blockSubmit = validation => {
    this.setState({ blockSubmit: validation });
  };

  saveTypography = () => {
    this.props.setTypography(this.state.typography);
    message.success(WARNINGS.SUCESS);
  };

  render() {
    return (
      <div>
        <Title>Typeface</Title>
        <Divider />
        <p>{WARNINGS.RULE}</p>
        <Row gutter={16}>
          <Col span={20}>
            {this.props.fontList.length === 0 ? (
              <Icon type="loading" style={{ fontSize: 24 }} spin />
            ) : (
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={this.props.typography}
                maxTagCount={5}
                onChange={this.handleFontListSelect}
              >
                {this.props.fontList.map(font => (
                  <Option key={font.family} value={font.family}>
                    {font.family}
                  </Option>
                ))}
              </Select>
            )}
          </Col>
          <Col span={4}>
            <Button
              onClick={this.saveTypography}
              type="primary"
              disabled={this.state.blockSubmit ? true : false}
            >
              {BUTTONS.SAVE}
            </Button>
          </Col>
        </Row>
        {this.state.showErrorMessage ? (
          <Alert
            style={{ marginTop: '20px' }}
            message={WARNINGS.ERROR_MAX_FONTS}
            type="error"
            showIcon
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

Typeface.propTypes = {
  fontList: PropTypes.arrayOf(PropTypes.object),
  typography: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = state => {
  return {
    fontList: state.guide.fontList,
    typography: state.guide.typography,
  };
};

const mapDispathToProps = dispatch => {
  return {
    getFonts: url => {
      dispatch(getFonts(url));
    },
    setTypography: typography => {
      dispatch(setTypography(typography));
    },
  };
};

const TypeFaceContainer = connect(mapStateToProps, mapDispathToProps)(Typeface);

export default TypeFaceContainer;
