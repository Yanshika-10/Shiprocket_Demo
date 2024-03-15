import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    background: {
      default: '#f9fafb',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    background: {
      default: '#1a202c',
    },
  },
});

export { lightTheme, darkTheme };
