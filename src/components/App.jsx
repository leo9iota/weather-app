import { ThemeProvider } from '@mui/material';
import Dashboard from './Dashboard';
import { darkTheme } from '../theme/Dark';
// import { lightTheme } from '../theme/Light';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
