import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';
import { FiniteStates } from 'store/finiteStates.enum';
import {
  GetProductsRequestBody,
  ProductsResults,
} from 'api/productsApi/productsApi.interface';

export type GetProductsPayload = {} & GetProductsRequestBody;

export type ProductsState = {
  fetchState: FiniteStates;
  data: ProductsResults;
  error: string | null;
};

export const initialState: ProductsState = {
  fetchState: FiniteStates.Idle,
  data: {
    pageSize: 16,
    count: 0,
    page: 1,
    items: [],
  },
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<GetProductsPayload>) => {
      // Set fetchState to loading only when the data
      // is being fetched for the first time
      if (state.fetchState === FiniteStates.Idle) {
        state.fetchState = FiniteStates.Loading;
        return;
      }
      state.fetchState = FiniteStates.Fetching;
    },
    setProductsSuccess: (
      state,
      { payload }: PayloadAction<ProductsResults>
    ) => {
      state.error = null;
      state.data = payload;
      state.fetchState = FiniteStates.Success;
    },
    setProductsError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.fetchState = FiniteStates.Failure;
    },
  },
});

export const { setProductsSuccess, getProducts, setProductsError } =
  productsSlice.actions;

const productsSelector = (state: RootState): ProductsState => state.products;

export const selectProductsData = createSelector(
  productsSelector,
  ({ data }): ProductsResults => data
);

export const selectProductsLoading = createSelector(
  productsSelector,
  ({ fetchState }): boolean => fetchState === FiniteStates.Loading
);

export const selectProductsFetching = createSelector(
  productsSelector,
  ({ fetchState }): boolean => fetchState === FiniteStates.Fetching
);

export const selectProductsFailure = createSelector(
  productsSelector,
  ({ fetchState }): boolean => fetchState === FiniteStates.Failure
);

export const selectProductsError = createSelector(
  productsSelector,
  ({ error }): string | null => error
);

export const selectProductsSuccess = createSelector(
  productsSelector,
  ({ fetchState }): boolean => fetchState === FiniteStates.Success
);

export default productsSlice.reducer;
