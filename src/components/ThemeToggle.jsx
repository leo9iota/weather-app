// ThemeToggle.jsx
import React from 'react';
import IconButton from '@mui/material/IconButton';
import DarkMode from '@mui/icons-material/DarkModeOutlined';
// import LightMode from '@mui/icons-material/LightModeOutlined';

const ThemeToggle = ({ onToggleTheme }) => {
  return (
    <IconButton onClick={onToggleTheme}>
      <DarkMode />
    </IconButton>
  );
};

export default ThemeToggle;

