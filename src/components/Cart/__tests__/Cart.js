import React from 'react';
import '@testing-library/jest-dom/extend-expect'

import {render, fireEvent} from '@testing-library/react';
import { Cart } from '../Cart';

test("render an empty cart", () => {
  const { container, getByText } = render(<Cart />);
  expect(getByText("Total: 0 €")).toBeInTheDocument();
  expect(container.querySelector("p b").textContent).toEqual("Total: 0 €");
});