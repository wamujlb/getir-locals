import { createTheme } from '@mui/material';

const PRIMARY = '#1EA4CE';
const SECONDARY = '#147594';

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECONDARY,
    },
  },
  typography: {
    fontFamily: ['Open Sans', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
      ','
    ),
  },
});
