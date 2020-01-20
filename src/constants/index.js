const BASE_URL = 'https://styleguide.michael.eti.br/';
const RESULT_URL = 'https://styleguide.michael.eti.br/result/';

const API_REQUESTS = Object.freeze({
  FONTS:
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDZ1o9r_dT7z-65fz34Nc0AVRHONFKH6_w',
  STYLE_GUIDE: {
    SAVE: '/guide/save/',
    READONLY: '/guide/',
  },
});

const WARNINGS = Object.freeze({
  TYPEFACE: {
    MAX_FONT: 'The maximum accepted is two Font Family.',
    SUCESS: 'You Font Family is saved!',
  },
  RESULT: {
    INPUT_NAME: 'Type a name for your Guide',
  },
});

const CONSTANTS = {
  BASE_URL,
  RESULT_URL,
  API_REQUESTS,
  WARNINGS,
};

export default CONSTANTS;
