import React, { createContext, useState, useContext } from 'react';
import { darkTheme } from '../themes/DarkTheme';
import { lightTheme } from '../themes/LightTheme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.palette.mode === 'light' ? darkTheme : lightTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
