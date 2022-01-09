import React from 'react';
import { create } from 'jss';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { jssPreset, StylesProvider } from '@mui/styles';

import { theme } from '../theme/theme';
import HomePage from 'routes/HomePage/HomePage';

const jss = create({
  plugins: [...jssPreset().plugins],
});

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <HomePage />
        </ThemeProvider>
      </StylesProvider>
    </StyledEngineProvider>
  );
};

export default App;
