import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import Dashboard from './Dashboard';
import { darkTheme } from '../theme/DarkTheme';
import { lightTheme } from '../theme/LightTheme';

function App() {
  const [themeMode, setThemeMode] = useState('dark');

  const toggleTheme = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Dashboard onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
