import { configureStore, PreloadedState } from '@reduxjs/toolkit';

import rootReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;
export type BaseThunkApiConfig = { state: RootState };

export const createStore = (preloadedState: PreloadedState<RootState> = {}) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV === 'development',
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export default store;
