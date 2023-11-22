import React from 'react';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { currentTheme, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme}>
      {currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
