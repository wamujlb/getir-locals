import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import ShoppingCartCard from 'common/components/ShoppingCart/ShoppingCartCard/ShoppingCartCard';
import ShoppingCartItem from 'common/components/ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import { useShoppingCartForm } from './hooks/useShoppingCardForm';
import {
  selectShoppingCartItemsList,
  selectShoppingCartTotalPrice,
  updateItemCount,
} from './shoppingCart.slice';
import { useAppDispatch } from 'App/state/useAppDispatch';

const ShoppingCart = () => {
  const { initialValues, onSubmit } = useShoppingCartForm();
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
      {/* <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Form> */}
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
      {/* </Form>
        )}
      </Formik> */}
    </ShoppingCartCard>
  );
};

ShoppingCart.displayName = 'ShoppingCart';

export default ShoppingCart;
