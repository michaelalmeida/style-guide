import React, { Component } from 'react';
import { connect } from "react-redux";
import { Typography, Select, Divider, Icon, Row, Col, Alert, Button } from 'antd';

import { getFonts, setTypography } from '../guide';

const { Title } = Typography;
const { Option } = Select;

class Typeface extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fontList: [],
            typography: [],
            showErrorMessage: false,
            blockSubmit: true
        }
    };

    componentDidMount() {
        this.props.getFonts('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDZ1o9r_dT7z-65fz34Nc0AVRHONFKH6_w');
    };

    handleFontListSelect = (value) => {
        this.checkSelectLimit(value.length);
        this.setState({
            typography : value
        })
    }

    checkSelectLimit = (selected) => {
        if (selected > 2) {
            this.errorMessage(true);
            this.blockSubmit(true);
        } else if (selected === 2) {
            this.errorMessage(false);
            this.blockSubmit(false);
        }
    }
    
    errorMessage = (validation) => {
        this.setState({showErrorMessage : validation});
    }

    blockSubmit = (validation) => {
        this.setState({blockSubmit : validation});
    }

    saveTypography = () => {
        this.props.setTypography(this.state.typography);
    }

    render() {
        return (
            <div>
                <Title>Typeface</Title>
                <Divider dashed />
                <p>Select all the Font family used in your project in order of priority.</p>
                <Row gutter={16}>
                    <Col span={18}>
                        {this.props.fontList.length === 0 ? <Icon type="loading" style={{ fontSize: 24 }} spin /> :
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                defaultValue={this.props.typography}
                                maxTagCount={5}
                                onChange={this.handleFontListSelect}
                            >
                                {this.props.fontList.map(font =>
                                    <Option key={font.family} value={font.family}>{font.family}</Option>
                                )}
                            </Select>
                        }
                    </Col>
                    <Col span={4}>
                        <Button onClick={this.saveTypography} type="primary" disabled={this.state.blockSubmit ? true : false}>Salvar</Button>
                    </Col>
                </Row>
                {this.state.showErrorMessage ? <Alert style={{marginTop : '20px'}} message="The maximum accepted is two Font Family." type="error" showIcon /> : ''}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        fontList: state.guide.fontList,
        typography: state.guide.typography
    };
};

const mapDispathToProps = dispatch => {
    return {
        getFonts: (url) => {
            dispatch(getFonts(url));
        },
        setTypography: (typography) => {
            dispatch(setTypography(typography));
        }
    }
};

const TypeFaceContainer = connect(
    mapStateToProps,
    mapDispathToProps
)(Typeface);

export default TypeFaceContainer;