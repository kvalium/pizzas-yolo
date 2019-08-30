import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react';

import { PizzaLoading } from '../PizzaLoading';

test("displays expected loading message", () => {
  const { getByText } = render(<PizzaLoading />);
  expect(getByText(/chargement des pizzas.../i)).toBeInTheDocument();
})