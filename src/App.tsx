import React from "react"

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import { useApplicationTheme } from "./contexts/theme-context";


const App: React.FC = () => {
    const { theme } = useApplicationTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes/>
        </ThemeProvider>
    )
}

export default App;