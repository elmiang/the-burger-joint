import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// Update the local storage whenever the redux store cart is updated (action is performed in cart)
store.subscribe(() => {
  const state = store.getState().cart;
  const serializedState = JSON.stringify(state);
  localStorage.setItem('cartItems', serializedState);
});