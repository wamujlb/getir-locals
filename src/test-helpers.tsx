import React from 'react';
import { ThemeProvider } from '@mui/styles';

import { theme } from 'theme/theme';
import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

export const WrappedWithTheme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export type WrappedWithReduxProps = {
  children?: React.ReactNode;
  store: EnhancedStore<RootState>;
};

export const WrappedWithRedux = ({
  children,
  store,
}: WrappedWithReduxProps) => {
  return <Provider store={store}>{children}</Provider>;
};
