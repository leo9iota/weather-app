// LightTheme.jsx
import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          user-select: none;
        }
      `,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: '#f7f7f7', // A very light gray, almost white, for the main background
      paper: '#ffffff', // Pure white for paper elements
    },
    primary: {
      main: '#a7c0f2', // A soft pastel blue for primary elements
      contrastText: '#000000', // Black for text on primary elements for better readability
    },
    secondary: {
      main: '#b3acc1', // A muted lavender for secondary elements
      contrastText: '#000000', // Black for text on secondary elements for better readability
    },
    text: {
      primary: '#000000', // Black for primary text, which includes paragraphs
      secondary: '#535353', // A medium gray for secondary text
    },
    error: {
      main: '#e57373', // A soft red for errors
    },
    warning: {
      main: '#ffb74d', // A pastel orange for warnings
    },
    info: {
      main: '#64b5f6', // A pastel blue for informational messages
    },
    success: {
      main: '#81c784', // A pastel green for success indicators
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.2rem',
      color: '#5c6bc0', // A pastel indigo for h1 headers
    },
    h2: {
      fontSize: '1.8rem',
      color: '#9fa8da', // A lighter shade of pastel indigo for h2 headers
    },
    // paragraph styles
    body1: {
      color: '#000000', // Black for body text
    },
    body2: {
      color: '#000000', // Black for secondary body text
    },
    // Other text variants as needed
  },
});
