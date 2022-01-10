import React from 'react';

import { ListItem, ListItemText, Typography } from '@mui/material';
import { usePrice } from 'common/hooks/usePrice';
import CounterInput from 'common/components/FormFields/CounterInput/CounterInput';
import { ShoppingCartItemData } from 'features/ShoppingCart/shoppingCart.slice';
import { useStyles } from './style';

export type ShoppingCartItemProps = {
  onCountChange: (name: string, value: number) => void;
} & ShoppingCartItemData;

const ShoppingCartItem = ({
  id,
  price,
  title,
  count,
  onCountChange,
}: ShoppingCartItemProps) => {
  const classes = useStyles();
  const formattedPrice = usePrice({ value: price });

  return (
    <ListItem
      divider
      classes={{ root: classes.root, secondaryAction: classes.secondaryAction }}
    >
      <ListItemText
        primary={title}
        secondary={formattedPrice}
        primaryTypographyProps={{ variant: 'body2', title }}
        secondaryTypographyProps={{
          fontWeight: 'medium',
          sx: { color: 'primary.main' },
        }}
      />

      <CounterInput name={id} initValue={count} onChange={onCountChange} />
    </ListItem>
  );
};

ShoppingCartItem.displayName = 'ShoppingCartItem';

export default ShoppingCartItem;
