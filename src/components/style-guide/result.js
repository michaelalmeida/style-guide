import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styled, {createGlobalStyle } from 'styled-components';

import { Typography, Row, Col } from 'antd';
const { Title } = Typography;

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=${props => props.primaryFont || "Roboto"}|${props => props.secondaryFont || "Playfair Display"}');
    }
    .primary-font {
        font-family: "${props => props.primaryFont || "Roboto"}";
    }
    .secondary-font {
        font-family: "${props => props.secondaryFont || "Playfair Display"}";
    }
`;

const ResultTitle = styled.div`
    width: 100%;
    background: ${props => props.primaryColor || "#1A535C"}

    h1 {
        padding: 60px;
        font-size: 36px;
        color: #fff;
    }
`;

const FontSample = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 150px;
    line-height: 0.8;

    small {
        margin-top: 15px;
        display: block;
        font-size: 14px;
        color: #666666;
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }
`

const Result = props => {
    return (
        <>
            <GlobalStyles primaryFont={props.typography[0]} secondayFont={props.typography[1]}/>
            <ResultTitle primaryColor={props.colors["first"].hex}>
                <h1 className="primary-font">My Style-guide</h1>
            </ResultTitle>
            <Title>Typography</Title>
            {props.typography.map((font, index) => {
                return <div className={index === 1 ? 'primary-font' : 'secondary-font'} key={index}>
                    <Row gutter={16} style={{marginTop: "50px"}}>
                        <Col span={8}><FontSample>Aa <small>{font}</small></FontSample></Col>
                        <Col span={16}>
                                <Title>h1. {font}</Title>
                                <Title level={2}>h2. {font}</Title>
                                <Title level={3}>h3. {font}</Title>
                                <Title level={4}>h4. {font}</Title>
                        </Col>
                    </Row>
                </div>
            })}
        </>
    )
}

Result.propTypes = {
    colors: PropTypes.object,
    fontList: PropTypes.arrayOf(PropTypes.object),
    typography: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = state => {
    return {
        colors: state.guide.colors,
        typography: state.guide.typography,
        elements: state.guide.elements
    }
}

const ResultContainer = connect(
    mapStateToProps,
    null
)(Result);

export default ResultContainer;