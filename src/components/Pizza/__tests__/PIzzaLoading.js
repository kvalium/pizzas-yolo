import React from 'react';
import { render } from '@testing-library/react';

import { PizzaLoading } from '../PizzaLoading';

test("displays expected loading message", () => {
  const { getByText } = render(<PizzaLoading />);
  expect(getByText(/chargement des pizzas.../i)).toBeInTheDocument();
})