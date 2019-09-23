import React, { Component } from 'react'
import { connect } from "react-redux";

import { SketchPicker } from 'react-color';

import { Typography, Divider, Button } from 'antd';
const { Title } = Typography;

class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayColorPicker: false,
            primaryColor: {
                r: '241',
                g: '112',
                b: '19',
                a: '1',
            }
        }
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ primaryColor: color.rgb })
    };

    render() {
        return (
            <div>
                <Title>Color Palette</Title>
                <Divider dashed />
                <p>Select your project's colors.</p>
                <Button onClick={this.handleClick} 
                style={{background: `rgba(${ this.state.primaryColor.r }, ${ this.state.primaryColor.g }, ${ this.state.primaryColor.b }, ${ this.state.primaryColor.a })`}}  shape="circle"></Button>
                {this.state.displayColorPicker ? <div style={{marginBottom : '20px'}}>
                    <div onClick={this.handleClose} style={{position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',}} />
                    <SketchPicker color={this.state.primaryColor} onChange={this.handleChange} />
                </div> : null}
            </div>
        )
    }
}

const PaletteContainer = connect(
    null,
    null
)(Palette);

export default PaletteContainer;