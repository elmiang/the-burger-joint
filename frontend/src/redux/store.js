import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

store.subscribe(() => {
  const state = store.getState().cart;
  const serializedState = JSON.stringify(state);
  localStorage.setItem('cartItems', serializedState);
});