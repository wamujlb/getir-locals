import React from 'react';

import { ProductItemData } from 'features/ProductResults/ProductResults.interface';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { usePrice } from 'common/hooks/usePrice';
import CounterField from 'common/components/FormFields/CounterField/CounterField';
import { useStyles } from './style';

export type ShoppingCartItemProps = {
  name: string;
} & ProductItemData;

const ShoppingCartItem = ({
  id,
  name,
  price,
  title,
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

      <CounterField name={name} />
    </ListItem>
  );
};

ShoppingCartItem.displayName = 'ShoppingCartItem';

export default ShoppingCartItem;
