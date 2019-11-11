import React from 'react'
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
    margin: 0;
    padding: 10px 10px 0 0;
    color: #ffffff;
    font-size: 22px;
    text-align: right;
`

const ColorComponent = (props) => {
    const index = props.index;
    const height = props.height;
    const setColors = props.setColors;

    return <>
        <Popover placement="left" content={<SketchPicker color={props.colors[index].rgba} onChange={(color) => {handlerColor(color, props.colors, index, setColors)}} />} trigger="hover">
            <ColorCard height={height} color={props.colors[index].hex}>
                <ColorDisplay>{props.colors[index].hex}</ColorDisplay>
            </ColorCard>
        </Popover>
    </>
}

const handlerColor = (colorSelected, colors, index, setColors) => {
    setColors({...colors,  [index] : {hex: colorSelected.hex, rgba: colorSelected.rgb}});
}

const Palette = (props) => {
        return (
            <div>
                <Title>Color Palette</Title>
                <Divider />
                <Title level={4}></Title>
                <ColorComponent colors={props.colors} index="first" height="120px" setColors={props.setColors} />
                <ColorComponent colors={props.colors} index="second" height="100px" setColors={props.setColors} />
                <ColorComponent colors={props.colors} index="third" setColors={props.setColors} />
                <ColorComponent colors={props.colors} index="fourth" setColors={props.setColors} />
            </div>
        )
}

Palette.propTypes = {
    colors: PropTypes.object
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