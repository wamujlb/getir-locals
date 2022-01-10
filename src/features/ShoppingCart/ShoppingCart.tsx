import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';

import ShoppingCartCard from 'common/components/ShoppingCart/ShoppingCartCard/ShoppingCartCard';
import ShoppingCartItem from 'common/components/ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import { useShoppingCartForm } from './hooks/useShoppingCardForm';

const ShoppingCart = () => {
  const { initialValues, onSubmit } = useShoppingCartForm();

  return (
    <ShoppingCartCard totalPrice={12321} variant="outlined">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Form>
            <ShoppingCartItem
              id="id_1"
              name="items.id_1"
              title="Example Product"
              price={14.99}
              imageUri=""
            />

            <ShoppingCartItem
              id="id_2"
              name="items.id_2"
              title="Example Product"
              price={14.99}
              imageUri=""
            />

            <ShoppingCartItem
              id="id_3"
              name="items.id_3"
              title="Example Product"
              price={14.99}
              imageUri=""
            />
          </Form>
        )}
      </Formik>
    </ShoppingCartCard>
  );
};

ShoppingCart.displayName = 'ShoppingCart';

export default ShoppingCart;
