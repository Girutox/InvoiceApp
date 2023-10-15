import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './slices/invoiceSlice';

export const store = configureStore({
  reducer: {
    invoice: invoiceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
