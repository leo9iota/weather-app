// App.js
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeProviderWrapper } from './ThemeContext'; // adjust the import path
import Dashboard from './Dashboard';

function App() {
  return (
    <ThemeProviderWrapper>
      <ThemeProvider theme={theme.muiTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
