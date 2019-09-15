import React, { Component } from 'react';
import { connect } from "react-redux";
import { Typography, Select, Divider, Icon } from 'antd';

import { getFonts } from '../guide';

const { Title } = Typography;
const { Option } = Select;



class Typeface extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fontList: []
        }
    };

    componentDidMount() {
        this.props.getFonts('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDZ1o9r_dT7z-65fz34Nc0AVRHONFKH6_w');
    };

    render() {
        return (
            <div>
                <Title>Typeface</Title>
                <i>*All fonts from Google Fonts are available here</i>
                <Divider dashed />
                <Title level={3}>Select all the Font family used in your project in order of priority</Title>
                {this.props.fontList.length === 0 ? <Icon type="loading" style={{ fontSize: 24 }} spin /> :
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        defaultValue={[]}
                        maxTagCount={5}
                    >
                        {this.props.fontList.map(font =>
                            <Option key={font.family} value={font.family}>{font.family}</Option>
                        )}
                    </Select>
                }
                <b>The maximum recommended is two Font Family</b>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        fontList: state.guide.fontList
    };
};

const mapDispathToProps = dispatch => {
    return {
        getFonts: (url) => {
            dispatch(getFonts(url));
        }
    }
};

const TypeFaceContainer = connect(
    mapStateToProps,
    mapDispathToProps
)(Typeface);

export default TypeFaceContainer;