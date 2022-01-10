import React from 'react';
import { Box, Card, CardProps, List } from '@mui/material';

import ShoppingCartTotal from '../ShoppingCartTotal/ShoppingCartTotal';
import { useStyles } from './style';

export type ShoppingCartCardProps = {
  totalPrice: number;
} & CardProps;

const ShoppingCartCard = React.memo(
  ({ children, totalPrice, ...rest }: ShoppingCartCardProps) => {
    const classes = useStyles();

    return (
      <Card classes={classes} {...rest}>
        <Box p={2}>
          <List disablePadding>{children}</List>

          <Box display="flex" justifyContent="flex-end" pt={2}>
            <ShoppingCartTotal totalPrice={totalPrice} />
          </Box>
        </Box>
      </Card>
    );
  }
);

ShoppingCartCard.displayName = 'ShoppingCartCard';

export default ShoppingCartCard;
