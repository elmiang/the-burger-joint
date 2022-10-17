import { configureStore } from '@reduxjs/toolkit'
import { encryptData } from '../utility/Functions';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// Update the local storage whenever the redux store cart is updated (whenever an action is performed in the cart)
store.subscribe(() => {
  const salt = process.env.REACT_APP_SALT;
  const state = store.getState().cart;
  console.log(state);
  // const serializedState = JSON.stringify(state);

  const encryptedData = encryptData(state, salt);
  localStorage.setItem('cartItems', encryptedData);
});