import React from 'react';
import { Button, ButtonProps } from '@mui/material';

import { usePrice } from 'common/hooks/usePrice';
import ShoppingCartIcon from '../icons/ShoppingCart/ShoppingCart';
import { useStyles } from './style';

export type AppBarShoppingCartProps = {
  value: number;
} & ButtonProps;

const AppBarShoppingCart = ({ value }: AppBarShoppingCartProps) => {
  const classes = useStyles();
  const price = usePrice({ value });

  return (
    <Button
      disableElevation
      color="secondary"
      variant="contained"
      classes={classes}
      startIcon={<ShoppingCartIcon />}
    >
      {price}
    </Button>
  );
};

AppBarShoppingCart.displayName = 'AppBarShoppingCart';

export default AppBarShoppingCart;
