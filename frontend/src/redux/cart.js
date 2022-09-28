import { createSlice, current } from '@reduxjs/toolkit'
import React, { onEffect } from 'react';

const initialState = JSON.parse(localStorage.getItem("cartItems"));

//Use return for methods that directly manipulates the state
//Use 'state = ...' for methods that update the state's properties
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action) {
      return action.payload;
    },
    deleteItem(state, action) {
      const items = state.filter(item => item.id !== action.payload);
      return items;
    },
    updateItemQuantity(state, action) {
      const items = [...state];
      items.find(item => item.id === action.payload.id).quantity = action.payload.num;
      state = items;
    },
    updateItemPrice(state, action) {
      const items = [...state];
      items.find(item => item.id === action.payload.id).price = action.payload.num;
      state = items;
    },
    updateItemExtras(state, action) {
      const items = [...state];
      items.find(item => item.id === action.payload.id).extra = action.payload.extra;
      state = items;
    },
    updateItemIngredients(state, action) {
      const items = [...state];
      items.find(item => item.id === action.payload.id).ingredients = action.payload.ingredients;
      state = items;
    }
  },
})

export const { setItems, deleteItem, updateItemQuantity, updateItemPrice, updateItemExtras, updateItemIngredients } = cartSlice.actions
export default cartSlice.reducer