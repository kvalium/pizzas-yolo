import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react';

import { Cart } from '../Cart';

it("render an empty cart", () => {
  const { getByText } = render(<Cart flushCart={jest.fn()} />);
  expect(getByText("Total: 0 €")).toBeInTheDocument();
});

it("trigger flush cart function", () => {
  const mockFlushCart = jest.fn();
  const { getByText } = render(<Cart flushCart={mockFlushCart} />);
    // Click event check
    fireEvent.click(getByText("Vider le panier"));
    expect(mockFlushCart).toHaveBeenCalledTimes(1);
})

it("render an existing cart", () => {
  const fakeCart = [
    {name: "Pizza 1", price: 10},
    {name: "Pizza 2", price: 25}
  ]
  const { getByText, getAllByText } = render(<Cart cart={fakeCart} flushCart={jest.fn()} />);
  
  const displayedPizzas = getAllByText(/pizza/i);
  expect(displayedPizzas.length).toEqual(2);
  displayedPizzas.forEach((pizzaNode, i) => {
    expect(pizzaNode.textContent).toBe(fakeCart[i].name);
  })
  
  expect(getByText("Total: 35 €")).toBeInTheDocument();
});