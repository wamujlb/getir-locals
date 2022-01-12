import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

import { usePrice } from 'common/hooks/usePrice';
import Counter from 'common/components/FormFields/Counter/Counter';
import { ShoppingCartItemData } from 'store/ducks/shoppingCart/shoppingCart.slice';
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

      <Counter name={id} initValue={count} onChange={onCountChange} />
    </ListItem>
  );
};

ShoppingCartItem.displayName = 'ShoppingCartItem';

export default ShoppingCartItem;
