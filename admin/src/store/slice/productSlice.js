import { createSlice } from '@reduxjs/toolkit';

const initalProductState = {
  product: [],
};
const productSlice = createSlice({
  name: 'product',
  initialState: initalProductState,
  reducers: {
    saveProduct(state, actions) {
      state.product = actions.payload;
      console.log(actions.payload);
    },
  },
});
export { productSlice };
export const productAction = productSlice.actions;
