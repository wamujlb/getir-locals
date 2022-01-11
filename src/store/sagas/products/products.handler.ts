import { call, put, takeLatest } from 'redux-saga/effects';

import {
  setProductsSuccess,
  setProductsError,
  getProducts,
  GetProductsPayload,
} from 'store/ducks/products/products.slice';
import { ProductsResults } from 'api/productsApi/productsApi.interface';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from 'api/productsApi/productsApi';

export function* handleGetProducts({
  payload,
}: PayloadAction<GetProductsPayload>) {
  try {
    const data: ProductsResults = yield call(() => fetchProducts(payload));

    yield put(setProductsSuccess(data));
  } catch (error) {
    yield put(setProductsError(JSON.stringify(error)));
  }
}

export function* watchGetProducts() {
  yield takeLatest(getProducts.type, handleGetProducts);
}
