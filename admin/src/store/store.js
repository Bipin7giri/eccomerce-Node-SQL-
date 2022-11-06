import { configureStore } from '@reduxjs/toolkit';
// const authslice = require("./slice/authSlice");
import { productSlice } from './slice/productSlice';

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});
export default store;
