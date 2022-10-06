import '@testing-library/jest-dom';
import { render, fireEvent, screen} from '@testing-library/react';
import React from 'react';
import { rest } from "msw";
import { setupServer } from "msw/node";

import Menu from "../Menu";
import Sidebar from '../../components/Sidebar';
import { renderWithProviders } from '../../utility/test-utils';

const baseurl = process.env.REACT_APP_BACKEND_API_URL;  

const response = rest.get(`${baseurl}/api/menu/`, (req, res, ctx) => {
    return res(ctx.json([{id: 1, Dish_id: 1, DishName: 'Test Burger', Category: 'Burger'}]))
});

const server = new setupServer(response);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Menu Items', () => {
    test("should fetch menu items from db and be displayed", async () => {
        renderWithProviders(<Menu />);
        const menuItem = await screen.findByTestId('menu-item-0');
        expect(menuItem).toBeInTheDocument();
    });
    test("Error in fetching menu items, cannot find item to be displayed", async () => {
        renderWithProviders(<Menu />);
        const menuItem = await screen.findByTestId('menu-item-2');
        expect(menuItem).not.toBeInTheDocument();
    })
})

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

