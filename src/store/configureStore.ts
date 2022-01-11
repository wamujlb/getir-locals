import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { watcherSaga } from './sagas/rootSaga';

export type RootState = ReturnType<typeof rootReducer>;
export type BaseThunkApiConfig = { state: RootState };

const sagaMiddleware = createSagaMiddleware();

export const createStore = (preloadedState: PreloadedState<RootState> = {}) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({ thunk: false }),
      sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV === 'development',
  });

const store = createStore();

sagaMiddleware.run(watcherSaga);

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export default store;
