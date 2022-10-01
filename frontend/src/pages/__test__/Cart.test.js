import React from 'react';
import { screen, render } from '@testing-library/react';
import { renderWithProviders } from '../../utility/test-utils';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { debug } from 'jest-preview';

import Cart from '../Cart';

const MockCart = () => {
  return(
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  );
}

describe('Cart total price tests', () => {
  test('should return the total price of a single item in the cart', () => {
    const initialCartItems = [{id: 1, name: 'Fake Burger', price: 12, quantity: '1', category: 'Burger', ingredients: ['Beef Patty', 'Cheese', 'Pickles']}];
    
    renderWithProviders(<MockCart />, {
      preloadedState: {
        cart: initialCartItems
      }
    });
  
    expect(screen.getByTestId('checkoutPrice')).toHaveTextContent('$12.00');
  });
  
  test('should return the total price of multiple items in the cart', () => {
    const initialCartItems = [
      {id: 1, name: 'Test Burger', price: 12, quantity: '1', category: 'Burger', ingredients: ['Beef Patty', 'Cheese', 'Pickles']},
      {id: 2, name: 'Beef Burger', price: 14, quantity: '1', category: 'Burger', ingredients: ['Beef Patty', 'Cheese', 'Pickles', 'Lettuce', 'Tomato']},
      {id: 3, name: 'Chicken Burger', price: 15, quantity: '1', category: 'Burger', ingredients: ['Chicken Patty', 'Cheese', 'Pickles', 'Lettuce', 'Tomato']}];
  
    renderWithProviders(<MockCart />, {
      preloadedState: {
        cart: initialCartItems
      }
    });
  
    expect(screen.getByTestId('checkoutPrice')).toHaveTextContent('$41.00');
  });
  
  test('should return the total price of multiple items with multiple quantities in the cart', () => {
    const initialCartItems = [
      {id: 1, name: 'Test Burger', price: 12, quantity: '2', category: 'Burger', ingredients: ['Beef Patty', 'Cheese', 'Pickles']},
      {id: 2, name: 'Beef Burger', price: 14, quantity: '3', category: 'Burger', ingredients: ['Beef Patty', 'Cheese', 'Pickles', 'Lettuce', 'Tomato']},
      {id: 3, name: 'Chicken Burger', price: 15, quantity: '5', category: 'Burger', ingredients: ['Chicken Patty', 'Cheese', 'Pickles', 'Lettuce', 'Tomato']}];
  
    renderWithProviders(<MockCart />, {
      preloadedState: {
        cart: initialCartItems
      }
    });
    expect(screen.getByTestId('checkoutPrice')).toHaveTextContent('$141.00');
  });
});