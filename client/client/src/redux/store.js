/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { userSlice } from './slice/authSlice';
import { cartSlice } from './slice/cartSlice';
const rootPersistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  user: persistReducer(rootPersistConfig, userSlice.reducer),
  carts: persistReducer(rootPersistConfig, cartSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
