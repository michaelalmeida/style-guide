import React, { Component } from 'react'
import { connect } from "react-redux";
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types'; 
import styled from 'styled-components'

import { setColors } from '../../redux/guide';

import {  Typography, Divider, Popover } from 'antd';
const { Title } = Typography;

const ColorCard = styled.div`
    height: ${props => props.height || "50px"};
    background: ${props => props.color || "#eeeeee"};
`;

const ColorDisplay = styled.p`
    display: block;
    padding: 20px;
    color: #ffffff;
    font-size: 22px;
    text-align: right;
`

const ColorComponent = (props) => {
    const index = props.index;
    const height = props.height;

    return <>
        <Popover placement="left" content={<SketchPicker color={props.colors[index].rgba} onChange={()=>{}} />} trigger="hover">
            <ColorCard height={height} color={props.colors[index].hex}>
                <ColorDisplay>{props.colors[index].hex}</ColorDisplay>
            </ColorCard>
        </Popover>
    </>
}

const setColor = (color, index) => {
    this.setState(prevState => ({
        colors: {...prevState.colors,  [index] : {hex: color.hex, rgba: color.rgba}}
    }));
}

const Palette = (props) => {
        return (
            <div>
                <Title>Color Palette</Title>
                <Divider />
                <Title level={4}></Title>
                <ColorComponent colors={props.colors} index="first" height="100px" />
            </div>
        )
}

Palette.propTypes = {
    primaryColor: PropTypes.object
}

const mapStateToProps = state => {
    return {
        colors: state.guide.colors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setColors: (colors) => {
            dispatch(setColors(colors));
        }
    }
}

const PaletteContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Palette);

export default PaletteContainer;