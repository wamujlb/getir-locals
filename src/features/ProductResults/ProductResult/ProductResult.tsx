import React, { useCallback } from 'react';

import ProductItem from 'common/components/ProductItem/ProductItem';
import { ProductItemData } from '../ProductResults.interface';
import { useAppDispatch } from 'store/useAppDispatch';
import {
  addItem,
  removeItem,
} from 'store/ducks/shoppingCart/shoppingCart.slice';

export type ProductResultPros = {
  addedToCart?: boolean;
} & ProductItemData;

const ProductResult = (props: ProductResultPros) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addItem(props));
  }, [dispatch, props]);

  const handleRemoveFromCart = useCallback(() => {
    dispatch(removeItem(props.id));
  }, [dispatch, props.id]);

  return (
    <ProductItem
      addedToCart
      onAddToCart={handleAddToCart}
      onRemoveFromCart={handleRemoveFromCart}
      {...props}
    />
  );
};

ProductResult.displayName = 'ProductResult';

export default ProductResult;
