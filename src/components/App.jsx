// App.jsx
import { ThemeProvider } from '@mui/material';
import Dashboard from './Dashboard';
import { darkTheme } from '../theme/DarkTheme';
import { lightTheme } from '../theme/LightTheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
