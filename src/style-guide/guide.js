// Action Types
export const Types = {
    SET_COLORS: 'SET_COLORS',
    SET_TYPOGRAPHY: 'SET_TYPOGRAPHY',
    SET_COMPONENTS: 'SET_COMPONENTS',
    GET_FONTLIST: 'GET_FONTLIST',
};

// Reducer 
export const initialState = {
    colors: [],
    fontList: [], 
    typography: [],
    components: {
        header: true,
        card: true,
        buttons: true,
        website: true,
        mobile: true
    }
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case Types.SET_COLORS: 
            return {
                ...state,
                colors: action.colors
            }
        case Types.GET_FONTLIST:
            return {
                ...state,
                fontList: action.fontList
            }
        case Types.SET_TYPOGRAPHY:
                return {
                    ...state,
                    typography: action.typography
                }
        case Types.SET_COMPONENTS:
            return {
                ...state,
                components: action.components
            }
        default:
            return state;
    }
};

// Action Creators

export const colors = (colors) => {
    return {
        type: Types.SET_COLORS,
        colors
    }
};

export const fontList = (fontList) => {
    return {
        type: Types.GET_FONTLIST,
        fontList
    }
};

export const setTypography = (typography) => {
    return {
        type: Types.SET_TYPOGRAPHY,
        typography
    }
}

export const components = (components) => {
    return {
        type: Types.SET_COMPONENTS,
        components
    }
};

// Middleware
export const getFonts = (url) => {
    return dispatch => {
       fetch(url)
       .then(res => res.json())
       .then(res => dispatch(fontList(res.items)))
       .catch(err => {
        console.log("Error Reading data " + err);
      })
    }
};