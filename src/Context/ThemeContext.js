import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "../Redux/ActionTypes";
import { themeReducer } from "../Redux/Reducer/ThemeReducer";




export const themeContext = createContext();

const initVal = {
    theme: 'light'
}

const ToggleThemeContext = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initVal);

    const toggle_theme = (val) => {
        let newTheme = val === "light" ? 'dark' : 'light';
        dispatch({ type: TOGGLE_THEME, payload: newTheme })
    }

    return (
        <themeContext.Provider
            value={{
                ...state,
                toggle_theme
            }}
        >
            {children}
        </themeContext.Provider>
    )
}

export default ToggleThemeContext;