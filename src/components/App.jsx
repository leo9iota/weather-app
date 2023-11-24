import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProviderWrapper } from './ThemeContext';
import Dashboard from './Dashboard';
// import TitleAnim from './TitleAnim';

function App() {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      {/* <TitleAnim /> */}
      <Dashboard />
    </ThemeProviderWrapper>
  );
}

export default App;
