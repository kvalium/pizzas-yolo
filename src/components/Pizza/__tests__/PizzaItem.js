import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react';

import { PizzaItem } from '../PizzaItem';

test("display data and trigger add to cart function", () => {
  const fakeAddToCart = jest.fn();
  const fakePizza = {
    name: "Margherita",
    price: 10,
    desc: "the classic one, yo"
  }
  const { getByText } = render(<PizzaItem addToCart={fakeAddToCart} pizza={fakePizza} />);

  // check that pizza data is present in the component
  expect(getByText(/margherita/i)).toBeInTheDocument();
  expect(getByText(/10 €/i)).toBeInTheDocument();
  expect(getByText(/the classic one, yo/i)).toBeInTheDocument();

  // check that event is triggered when add to cart button is clicked
  fireEvent.click(getByText(/ajouter au panier/i));
  expect(fakeAddToCart).toHaveBeenCalledTimes(1);
  expect(fakeAddToCart).toHaveBeenCalledWith(fakePizza)
})