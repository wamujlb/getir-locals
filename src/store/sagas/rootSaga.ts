import { all, takeLatest } from 'redux-saga/effects';

import { watchGetProducts } from './products/products.handler';

export function* watcherSaga() {
  yield all([watchGetProducts()]);
}
