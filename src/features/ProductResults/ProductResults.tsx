import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardContent,
  Pagination,
  PaginationRenderItemParams,
} from '@mui/material';

import ProductResult from './ProductResult/ProductResult';
import { selectShoppingCartItems } from 'store/ducks/shoppingCart/shoppingCart.slice';
import { ProductsResults } from 'api/productsApi/productsApi.interface';
import { useAppDispatch } from 'store/useAppDispatch';
import PaginationNext from 'common/components/Pagination/PaginationNext/PaginationNext';
import PaginationPrev from 'common/components/Pagination/PaginationPrev/PaginationPrev';
import StyledPaginationItem from 'common/components/Pagination/StyledPaginationItem/StyledPaginationItem';
import ProductItemSkeleton from 'common/components/ProductItem/ProductItemSkeleton/ProductItemSkeleton';
import {
  getProducts,
  selectProductsData,
  selectProductsError,
  selectProductsFailure,
  selectProductsFetching,
  selectProductsLoading,
} from 'store/ducks/products/products.slice';
import ProductResultsContent from './ProductResultsContent/ProductResultsContent';
import { DEFAULT_PAGE_SIZE } from 'api/productsApi/productsApi';

const ProductResults = () => {
  const dispatch = useAppDispatch();
  const shoppingCart = useSelector(selectShoppingCartItems);
  const products = useSelector(selectProductsData);
  const isLoaiding = useSelector(selectProductsLoading);
  const isFailure = useSelector(selectProductsFailure);
  const isFetching = useSelector(selectProductsFetching);
  const error = useSelector(selectProductsError);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getProducts({ page }));
  }, [dispatch, page]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Card>
        <CardContent>
          <ProductResultsContent
            pageSize={DEFAULT_PAGE_SIZE}
            isLoading={isLoaiding}
            isFailure={isFailure}
            isFetching={isFetching}
            error={error}
            shoppingCart={shoppingCart}
            data={products}
          />
        </CardContent>
      </Card>

      {products.count > 0 && (
        <Pagination
          count={products.count}
          shape="rounded"
          sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
          onChange={handlePageChange}
          renderItem={(item: PaginationRenderItemParams) => (
            <StyledPaginationItem
              {...item}
              components={{ previous: PaginationPrev, next: PaginationNext }}
              color="primary"
            />
          )}
        />
      )}
    </>
  );
};

ProductResults.displayName = 'ProductResults';

export default ProductResults;
