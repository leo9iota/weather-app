// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { darkTheme, lightTheme } from '../themes'; // adjust the import path

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const muiTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, muiTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
