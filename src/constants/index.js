const BASE_URL = 'https://styleguide.michael.eti.br/';
const RESULT_URL = 'https://styleguide.michael.eti.br/result/';

const API_REQUESTS = Object.freeze({
  FONTS:
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDZ1o9r_dT7z-65fz34Nc0AVRHONFKH6_w',
  STYLE_GUIDE: {
    SAVE: 'https://style-guide-backend.herokuapp.com/guide/save/',
    READONLY: 'https://style-guide-backend.herokuapp.com/guide/',
  },
});

const CONSTANTS = {
  BASE_URL,
  RESULT_URL,
  API_REQUESTS,
};

export default CONSTANTS;
