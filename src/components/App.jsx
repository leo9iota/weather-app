import { ThemeProvider, CssBaseline } from '@mui/material';
import Dashboard from './Dashboard';
import { darkTheme } from '../themes/DarkTheme';
// import { lightTheme } from '../themes/LightTheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
