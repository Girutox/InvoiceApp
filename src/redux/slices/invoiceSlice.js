import { createSlice, current } from '@reduxjs/toolkit';
import { mainData } from '../../models/invoiceMainData';

const initialState = {
  invoices: mainData
};

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    edit(state, action) {
      const { id } = action.payload;
      const invoiceIndex = state.invoices.findIndex(item => item.id === id);

      const invoiceData = { ...action.payload };
      invoiceData.invoiceDate = new Date(action.payload.invoiceDate);

      state.invoices[invoiceIndex] = invoiceData;
    },
    add(state, action) {

    }
  }
});

export const { edit, add } = invoiceSlice.actions;

export default invoiceSlice.reducer;
