import React, {Component} from 'react';
import { connect } from "react-redux";
import { Typography, Select, Divider  } from 'antd';

import {getFonts} from '../guide';

const { Title } = Typography;
const { Option } = Select;



class Typeface extends Component {

    constructor(props) {
        super(props);

        this.state = {
            typographyList: []
        }
    };

    componentDidMount() {
        this.props.getFonts('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDZ1o9r_dT7z-65fz34Nc0AVRHONFKH6_w');
    };

    render() {
        return (
            <div>
                <Title>Select the main Font family</Title>
                <Divider dashed />
                    {this.props.typography.length === 0 ? 'a' :
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >

                            {this.state.typography.map(
                                font => <Option value={font}>{font}</Option>
                            )}
                        
                        </Select>
                    }
                <Title>h1. Ant Design</Title>
                <Title level={2}>h2. Ant Design</Title>
                <Title level={3}>h3. Ant Design</Title>
                <Title level={4}>h4. Ant Design</Title>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        typography: state.guide.typography
    };
};

const mapDispathToProps = dispatch => {
    return {
        getFonts : (url) => {
            dispatch(getFonts(url));
        }
    }
} ;

const TypeFaceContainer = connect(
    mapStateToProps,
    mapDispathToProps
)(Typeface);

export default TypeFaceContainer;