import React from 'react';
import { ThemeProvider } from '@mui/styles';

import { theme } from 'theme/theme';

export const WrappedWithTheme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
