import React from 'react';
import IconButton from '@mui/material/IconButton';
import DarkMode from '@mui/icons-material/DarkModeOutlined';
import LightMode from '@mui/icons-material/LightModeOutlined';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme}>
      {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;
