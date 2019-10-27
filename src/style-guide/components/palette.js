import React, { Component } from 'react'
import { connect } from "react-redux";
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';

import {  Row, Col, Typography, Divider, Button, Popover, Card } from 'antd';
const { Title } = Typography;

class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            primaryColor: {
                hex: "#22194D",
                rgba: {
                    r: '34',
                    g: '25',
                    b: '77',
                    a: '100'
                }
            }
        }
    }

    componentDidMount() {
        this.setState({teste: ' teste'})
    }

    handleChange = (color) => {
        this.setState(prevState => ({
            ...prevState,
            primaryColor: {
                hex: color.hex,
                rgba: color.rgb
            }
        })
        );
    };

    render() {
        return (
            <div>
                <Title>Color Palette</Title>
                <Divider />
                <Title level={4}></Title>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title={
                        <Popover placement="right" content={<SketchPicker color={this.state.primaryColor.rgba} onChange={this.handleChange} />} trigger="hover">
                            <FontAwesomeIcon color={this.state.primaryColor.hex} icon={faBrush} /> Select the Primary Color
                        </Popover>}
                         bordered={false} style={{ width: 300 }}>
                            <p>Name</p>
                            <p>{this.state.primaryColor.hex}</p>
                            <p>rgba({this.state.primaryColor.rgba.r}, {this.state.primaryColor.rgba.g},{this.state.primaryColor.rgba.b},{this.state.primaryColor.rgba.a})</p> 
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Secondary Color" bordered={false} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

Palette.propTypes = {
    primaryColor: PropTypes.object
}

const mapStateToProps = state => {
    return {
        
    }
}

const PaletteContainer = connect(
    null,
    null
)(Palette);

export default PaletteContainer;