import React, { createContext, useState, useContext } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        fontPrimary: string;
        detailsColor: string;

        success: string;
        info: string;
        warning: string;
    }
}

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const storageKey = "BackOffice:Theme:Active";
    const previousThemeString = localStorage.getItem(storageKey);
    let currentTheme: ITheme;
    if(previousThemeString) {
        currentTheme = JSON.parse(previousThemeString)
    } else {
        currentTheme = dark;
    }
    
    const [theme, setTheme] = useState<ITheme>(currentTheme);

    const toggleTheme = () => {
        if(theme.title === "dark") {
            setTheme(light);
            localStorage.setItem(storageKey, JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem(storageKey, JSON.stringify(dark));
        }
    };

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
};

function useApplicationTheme(): IThemeContext {
    const context = useContext(ThemeContext);
    return context;
}

export {ThemeProvider, useApplicationTheme};