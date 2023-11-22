import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProviderWrapper } from './ThemeContext'; // adjust the import path
import Dashboard from './Dashboard';

function App() {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      <Dashboard />
    </ThemeProviderWrapper>
  );
}

export default App;
