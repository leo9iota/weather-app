import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { darkTheme } from '../themes/DarkTheme';
import { lightTheme } from '../themes/LightTheme';

const ThemeContext = createContext({
  currentTheme: 'light',
  toggleTheme: () => {},
});

export const useThemeContext = () => React.useContext(ThemeContext);

export const ThemeProviderWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const toggleTheme = () =>
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  const theme = useMemo(() => {
    return createTheme(currentTheme === 'light' ? lightTheme : darkTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
