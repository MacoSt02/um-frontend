import { ThemeContext, ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme-styles';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeContextProvider = ({ children }: { children: any }) => {
    const [theme] = useState(defaultTheme);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
