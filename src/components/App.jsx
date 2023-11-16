import { darkTheme } from '../theme/Dark';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Dashboard from './Dashboard';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
