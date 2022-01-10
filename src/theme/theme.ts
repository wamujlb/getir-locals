import { createTheme } from '@mui/material';

import { SHADOWS } from './overrides/shadows';

const PRIMARY = '#1EA4CE';
const SECONDARY = '#147594';

export const theme = createTheme({
  shape: {
    borderRadius: 2,
  },
  palette: {
    primary: {
      main: PRIMARY,
      contrastText: 'white',
    },
    secondary: {
      main: SECONDARY,
      contrastText: 'white',
    },
    background: {
      default: '#FAFAFA',
    },
  },
  typography: {
    fontFamily: ['Open Sans', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
      ','
    ),
    fontWeightMedium: 600,
  },
  shadows: SHADOWS,
});

theme.components = {
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'initial',
      },
      sizeSmall: {
        padding: theme.spacing(0, 1.5),
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      },
      outlinedPrimary: {
        borderColor: theme.palette.primary.main,
      },
    },
  },
};
