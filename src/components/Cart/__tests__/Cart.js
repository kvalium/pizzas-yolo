import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from "../../../testUtils";
import Cart from '../Cart';

test("render an empty cart", () => {
  const { getByText } = renderWithRedux(<Cart />);
  expect(getByText("Total: 0 €")).toBeInTheDocument();
});

test("render an existing cart then flush it", () => {
  const fakeCart = [
    {name: "Pizza 1", price: 10},
    {name: "Pizza 2", price: 25}
  ];

  const { getByText, getAllByText } = renderWithRedux(<Cart />, {
    initialState: {
      cartReducer: {
        cart: fakeCart
      }
    }
  });
  
  // check all pizzas were displayed
  expect(getAllByText(/pizza/i).length).toEqual(2);
  for(const { name } of fakeCart) {
    expect(getByText(name)).toBeInTheDocument();
  }
  expect(getByText("Total: 35 €")).toBeInTheDocument();
  
  // check we empty cart on button event
  fireEvent.click(getByText(/Vider le panier/i));
  expect(getByText("Total: 0 €")).toBeInTheDocument();
});
