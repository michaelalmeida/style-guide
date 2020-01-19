import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=${props =>
      props.primaryFont || 'Roboto'}|${props =>
  props.secondaryFont || 'Playfair Display'}');
    
    .primary-font {
        font-family: "${props => props.primaryFont || 'Roboto'}";
    }

    .secondary-font {
        font-family: "${props => props.secondaryFont || 'Playfair Display'}";
    }

    .ant-btn-primary {
        background-color: ${props => props.primaryColor || ''};
        border-color: ${props => props.primaryColor || ''};
    }

    .ant-btn {
        margin: 0 15px 0 0;
    }

    .ant-btn:hover, .ant-btn:focus {
        color: ${props => props.primaryColor || ''};
        background-color: #fff;
        border-color: ${props => props.primaryColor || ''};
    }

    .ant-btn-link {
        color: ${props => props.primaryColor || ''};
    }

    .ant-col .ant-tag:first-child {
        background-color:  ${props => props.primaryColor || ''};
    }

    .ant-col .ant-tag:nth-child(2) {
        background-color:  ${props => props.secondaryColor || ''};
    }

    .ant-tabs-nav .ant-tabs-tab-active,
    .ant-tabs-nav .ant-tabs-tab:hover {
        color:  ${props => props.primaryColor || ''};
    }

    .ant-tabs-ink-bar,
    .ant-switch-checked,
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-radio-inner::after {
        background-color:  ${props => props.primaryColor || ''};
    }

    .ant-input:focus,
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-radio-wrapper:hover .ant-radio,
    .ant-radio-checked::after,
    .ant-radio-checked .ant-radio-inner {
        border-color:  ${props => props.primaryColor || ''};
    }

    .ant-input:focus {
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
`;

export const ResultTitle = styled.div`
  width: 100%;
  background: ${props => props.primaryColor || '#1A535C'} input {
    padding: 60px;
    width: 100%;
    font-size: 36px;
    color: #fff;
    border: 0;
    background: none;
    outline: none;
  }
`;

export const FontSample = styled.h1`
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
      'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`;

export const ColorCard = styled.div`
  margin: 0 0 15px 0;
  height: 100px;
  border-radius: 5px;
  background: ${props => props.background || '#eeeeee'};
`;

export const BottomBar = styled.div`
  padding: 0 0 25px;
  overflow: hidden;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);

  button {
    float: right;
  }

  .ant-divider-horizontal {
    margin: 1px 0 25px 0;
  }
`;
