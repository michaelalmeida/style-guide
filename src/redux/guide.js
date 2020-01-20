import CONSTANTS from '../constants';
// Action Types
import Types from './constants';

const { API_REQUESTS } = CONSTANTS;

// Reducer
export const initialState = {
  id: '',
  name: '',
  colors: {
    first: { hex: '#1A535C', rgba: { r: '26', g: '83', b: '92', a: '100' } },
    second: { hex: '#4ECDC4', rgba: { r: '78', g: '205', b: '196', a: '100' } },
    third: { hex: '#F7FFF7', rgba: { r: '247', g: '255', b: '247', a: '100' } },
    fourth: {
      hex: '#FF6B6B',
      rgba: { r: '255', g: '107', b: '107', a: '100' },
    },
  },
  fontList: [],
  typography: [],
  elements: ['Button', 'Form'],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_COLORS:
      return {
        ...state,
        colors: action.colors,
      };
    case Types.GET_FONTLIST:
      return {
        ...state,
        fontList: action.fontList,
      };
    case Types.SET_TYPOGRAPHY:
      return {
        ...state,
        typography: action.typography,
      };
    case Types.SET_COMPONENTS:
      return {
        ...state,
        elements: action.elements,
      };
    case Types.SET_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case Types.GET_ID:
      return {
        ...state,
        id: action.id,
      };
    case Types.UPDATE_STATE:
      const { name, colors, typography, elements } = action.payload;
      return {
        ...state,
        name,
        colors,
        typography,
        elements,
      };
    default:
      return state;
  }
}

// Action Creators

export const setColors = colors => {
  return {
    type: Types.SET_COLORS,
    colors,
  };
};

export const fontList = fontList => {
  return {
    type: Types.GET_FONTLIST,
    fontList,
  };
};

export const setTypography = typography => {
  return {
    type: Types.SET_TYPOGRAPHY,
    typography,
  };
};

export const setComponents = elements => {
  return {
    type: Types.SET_COMPONENTS,
    elements,
  };
};

export const setId = id => {
  return {
    type: Types.GET_ID,
    id,
    isLoading: false,
  };
};

export const setName = name => {
  return {
    type: Types.SET_NAME,
    name,
  };
};

export const updateState = payload => {
  return {
    type: Types.UPDATE_STATE,
    payload,
  };
};

// Middleware
export const getFonts = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(res => dispatch(fontList(res.items)))
      .catch(err => {
        console.log('Error Reading data ' + err);
      });
  };
};

export const saveGuide = payload => {
  return dispatch => {
    fetch(API_REQUESTS.STYLE_GUIDE.SAVE, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => dispatch(setId(res)));
  };
};

export const getGuideFromDB = id => {
  return dispatch => {
    fetch(API_REQUESTS.STYLE_GUIDE.READONLY + id)
      .then(res => res.json())
      .then(res => dispatch(updateState(res)))
      .catch(err => {
        console.log('Error Reading data ' + err);
      });
  };
};
