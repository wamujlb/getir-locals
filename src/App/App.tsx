import React from 'react';
import { create } from 'jss';
import { Provider } from 'react-redux';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { jssPreset, StylesProvider } from '@mui/styles';

import { theme } from '../theme/theme';
import HomePage from 'routes/HomePage/HomePage';
import store from '../store/configureStore';

const jss = create({
  plugins: [...jssPreset().plugins],
});

const App = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <HomePage />
          </ThemeProvider>
        </StylesProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
