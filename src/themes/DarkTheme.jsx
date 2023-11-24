// DarkTheme.jsx
import { createTheme } from '@mui/material';

const borderRadiusValue = '8px';

export const darkTheme = createTheme({
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
          border: '1px solid rgba(204, 204, 204, 0.12)',
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
    mode: 'dark',
    background: {
      default: '#13131A', // Your global main background color
      paper: '#16161F', // Your global background color for paper elements
    },
    primary: {
      main: '#8FB2F5', // blue-light for primary
      contrastText: '#FFFFFF', // white for text on primary
    },
    secondary: {
      main: '#7F7F98', // gray-400 for secondary
      contrastText: '#FFFFFF', // white for text on secondary
    },
    text: {
      primary: '#FAFAFA', // gray-100 for primary text
      secondary: '#ABABC4', // gray-300 for secondary text
    },
    error: {
      main: '#B3B854', // Assuming an error color
    },
    warning: {
      main: '#BFBFD4', // gray-200 for warning
    },
    info: {
      main: '#22222F', // gray-600 for info
    },
    success: {
      main: '#3B3B54', // gray-500 for success
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
