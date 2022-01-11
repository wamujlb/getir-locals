import React, { useMemo } from 'react';
import { Alert, Fade, Grid } from '@mui/material';

import { ShoppingCartItems } from 'store/ducks/shoppingCart/shoppingCart.slice';
import { ProductsResults } from 'api/productsApi/productsApi.interface';
import ProductItemSkeleton from 'common/components/ProductItem/ProductItemSkeleton/ProductItemSkeleton';
import ProductResult from '../ProductResult/ProductResult';
import ContentBackdropLoader from 'common/components/Loaders/ContentBackdropLoader/ContentBackdropLoader';

export type ProductResultsContentProps = {
  pageSize: number;
  isLoading: boolean;
  isFailure: boolean;
  error: string | null;
  shoppingCart: ShoppingCartItems;
  isFetching: boolean;
  data: ProductsResults;
};

const ProductResultsContent = React.memo(
  ({
    pageSize,
    isLoading,
    isFailure,
    isFetching,
    error,
    data,
    shoppingCart,
  }: ProductResultsContentProps) => {
    const loadingSkeletons = useMemo(
      () => Array.from(Array(pageSize), (_, index) => `s_${index}`),
      [pageSize]
    );

    if (isLoading) {
      return (
        <Grid container spacing={3}>
          {loadingSkeletons.map((key: string) => (
            <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
              <ProductItemSkeleton />
            </Grid>
          ))}
        </Grid>
      );
    }

    if (isFailure && error) {
      return <Alert severity="error">{error}</Alert>;
    }

    return (
      <Grid container spacing={3} sx={{ position: 'relative' }}>
        <Fade mountOnEnter unmountOnExit in={isFetching}>
          <ContentBackdropLoader />
        </Fade>

        {data.count === 0 && (
          <Grid item xs={12}>
            <Alert severity="info">Sorry no products are available</Alert>
          </Grid>
        )}

        {data.items.map(({ id, ...rest }) => (
          <Grid key={id} item xs={6} md={4} lg={3}>
            <ProductResult id={id} addedToCart={!!shoppingCart[id]} {...rest} />
          </Grid>
        ))}
      </Grid>
    );
  }
);

ProductResultsContent.displayName = 'ProductResultsContent';

export default ProductResultsContent;
