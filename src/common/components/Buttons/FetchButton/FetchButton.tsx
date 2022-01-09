import React from 'react';
import {
  Button,
  ButtonProps,
  ButtonTypeMap,
  CircularProgress,
} from '@mui/material';

export type FetchButtonProps = {
  isFetching?: boolean;
} & ButtonProps<ButtonTypeMap['defaultComponent'], {}>;

const FetchButton = React.memo(
  ({ isFetching, startIcon, ...rest }: FetchButtonProps) => {
    return (
      <Button
        startIcon={
          !isFetching ? (
            startIcon
          ) : (
            <CircularProgress size={18} color="inherit" />
          )
        }
        {...rest}
      />
    );
  }
);

FetchButton.displayName = 'FetchButton';

export default FetchButton;
