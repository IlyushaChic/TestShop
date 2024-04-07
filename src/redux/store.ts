import { configureStore } from '@reduxjs/toolkit';
import shoppingСartReducer from './slices/shoppingСartSlice';
import { productsApi } from '../services/products';

export const store = configureStore({
  reducer: {
    shoppingСart: shoppingСartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});
