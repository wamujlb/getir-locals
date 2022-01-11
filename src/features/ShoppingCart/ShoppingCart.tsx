import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import ShoppingCartCard from 'common/components/ShoppingCart/ShoppingCartCard/ShoppingCartCard';
import ShoppingCartItem from 'common/components/ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import {
  selectShoppingCartItemsList,
  selectShoppingCartTotalPrice,
  updateItemCount,
} from 'store/ducks/shoppingCart/shoppingCart.slice';
import { useAppDispatch } from 'store/useAppDispatch';

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const items = useSelector(selectShoppingCartItemsList);
  const totalPrice = useSelector(selectShoppingCartTotalPrice);

  const handleCountChange = useCallback(
    (id: string, newCount: number) => {
      dispatch(updateItemCount({ id, newCount }));
    },
    [dispatch]
  );

  return (
    <ShoppingCartCard totalPrice={totalPrice} variant="outlined">
      {items.length === 0 && (
        <Typography textAlign="center">No items</Typography>
      )}

      {items.map(({ id, ...rest }) => (
        <ShoppingCartItem
          key={id}
          id={id}
          onCountChange={handleCountChange}
          {...rest}
        />
      ))}
    </ShoppingCartCard>
  );
};

ShoppingCart.displayName = 'ShoppingCart';

export default ShoppingCart;
