import { lightTheme } from '../theme/Light';
import { ThemeProvider } from '@mui/material';
import Dashboard from './Dashboard';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
