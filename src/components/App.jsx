import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProviderWrapper } from './ThemeContext';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      <Dashboard />
    </ThemeProviderWrapper>
  );
}

export default App;
