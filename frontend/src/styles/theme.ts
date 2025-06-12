import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Gold
      contrastText: '#333333', // Darker text for contrast on gold
    },
    secondary: {
      main: '#DAA520', // Goldenrod for a deeper yellow
    },
    background: {
      default: '#FFF8DC', // Cornsilk for a light, warm background
      paper: '#FFFFF0', // Ivory for component backgrounds
    },
    warning: {
      main: '#FFD700', // 金色
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif', // More rounded font
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '0 2px 8px 0 rgba(108,74,182,0.12)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#FFFFFF', // White background for text fields
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#FFFFFF', // White background for paper components
        },
      },
    },
  },
});

export default theme; 