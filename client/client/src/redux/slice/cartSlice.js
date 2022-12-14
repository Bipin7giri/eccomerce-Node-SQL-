/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, actions) {
      state.cart = [...state.cart, actions.payload];
    },
    removeCart(state, actions) {
      let temp = [...state.cart];
      let f = state.cart.splice(actions.payload, 1);
      const newArr = temp.filter((item) => {
        if (item.id !== actions.payload) {
          return item;
        }
      });
      state.cart = newArr;
    },
    removeAll(state) {
      state.cart = [];
    },
  },
});
export { cartSlice };
export const cartAction = cartSlice.actions;
