import { createTheme } from '@mui/material';

const borderRadiusValue = '8px';

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          user-select: none;
        }
      `,
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid rgba(77, 77, 77, 0.12)',
          borderRadius: borderRadiusValue,
        },
      },
    },
    MuiImage: {
      styleOverrides: {
        root: {
          borderRadius: borderRadiusValue,
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: '#f7f7f7', // A very light gray, almost white, for the main background
      paper: '#ffffff', // Pure white for paper elements
    },
    primary: {
      main: '#f0e8d9', // An off-white, creamy color for primary elements
      contrastText: '#333333', // Darker text for better readability on off-white
    },
    secondary: {
      main: '#e3dfd7', // A slightly grayish off-white, for a subtle contrast with primary
      contrastText: '#333333', // Darker text for better readability on off-white
    },
    text: {
      primary: '#333333', // A dark gray for primary text, softer than black
      secondary: '#595959', // A medium gray for secondary text, softer than black
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
    fontFamily: 'Space Grotesk, monospace',
    h1: {
      fontSize: '2.2rem',
      color: '#8FB2F5', // blue-light for h1 headers
    },
    h2: {
      fontSize: '1.8rem',
      color: '#7F7F98', // gray-400 for h2 headers
    },
  },
});
