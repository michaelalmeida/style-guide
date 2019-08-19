// Action Types
export const Types = {
    SET_COLORS: 'SET_COLORS',
    SET_TYPOGRAPHY: 'SET_TYPOGRAPHY',
    SET_COMPONENTS: 'SET_COMPONENTS'
};

// Reducer 
export const initialState = {
    colors: [],
    typography: {
        primary: 'Arial, Helvetica, sans-serif',
        secondary: 'sans-serif'
    },
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
        case Types.SET_TYPOGRAPHY:
            return {
                ...state,
                typography: action.typography
            }
        case Types.SET_TYPOGRAPHY:
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
}

export const typography = (typography) => {
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
}