import '@testing-library/jest-dom';
import { render, fireEvent, screen, within } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from "../Menu";
import Sidebar from '../../components/Sidebar';
import { renderWithProviders } from '../../utility/test-utils';

const MockMenu = () => {
    return (
        <BrowserRouter>
            <Menu/>
        </BrowserRouter>
    )
}

describe('Sidebar navigation', () => {
    test('should navigate to Burger section when button is clicked', () => {
        render(<Sidebar/>);
        fireEvent.click(screen.getByText('Burgers'));
        expect(screen.getByText('Burgers').closest('a')).toHaveAttribute('href', '#section-1');
    });

    test('should navigate to Drinks section when button is clicked', () => {
        render(<Sidebar/>);
        fireEvent.click(screen.getByText('Drinks'));
        expect(screen.getByText('Drinks').closest('a')).toHaveAttribute('href', '#section-2');
    });

    test('should navigate to Sides section when button is clicked', () => {
        render(<Sidebar/>);
        fireEvent.click(screen.getByText('Sides'));
        expect(screen.getByText('Sides').closest('a')).toHaveAttribute('href', '#section-3');
    });


});

describe('Display Menu Items', () => {
    test('should display burger items', async() => {
        const testMenuItem = {id: 1, name: 'Test Burger', description: 'test test', price: 10};
        
        renderWithProviders(<MockMenu/>, {
            preloadedState: {
                dishes: testMenuItem
            }
        });

        const burgerDiv = await screen.findByTestId("burger-item-0");
        expect(burgerDiv).toBeInTheDocument();
    });

    test('should display drink items', async() => {
        const testMenuItem = {id: 1, name: 'Test Burger', description: 'test test', price: 10};
        
        renderWithProviders(<MockMenu/>, {
            preloadedState: {
                dishes: testMenuItem
            }
        });

        const burgerDiv = await screen.findByTestId("drink-item-0");
        expect(burgerDiv).toBeInTheDocument();
    });

    test('should display side items', async() => {
        const testMenuItem = {id: 1, name: 'Test Burger', description: 'test test', price: 10};
        
        renderWithProviders(<MockMenu/>, {
            preloadedState: {
                dishes: testMenuItem
            }
        });

        const burgerDiv = await screen.findByTestId("side-item-0");
        expect(burgerDiv).toBeInTheDocument();
    });
})