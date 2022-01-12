import React from 'react';
import { create } from 'jss';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { jssPreset, StylesProvider } from '@mui/styles';

import { theme } from '../theme/theme';

const jss = create({
  plugins: [...jssPreset().plugins],
});

export const StoriesThemeWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </StylesProvider>
    </StyledEngineProvider>
  );
};
