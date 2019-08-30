import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithRedux } from "../../../testUtils";
import PizzaItem from '../PizzaItem';

test("display data and trigger add to cart function", () => {
  const fakePizza = {
    id: 1,
    name: "Margherita",
    price: 10,
    desc: "the classic one, yo"
  }
  const { getByText , store} = renderWithRedux(<PizzaItem pizza={fakePizza} />);

  // check that pizza data is present in the component
  expect(getByText(/margherita/i)).toBeInTheDocument();
  expect(getByText(/10 €/i)).toBeInTheDocument();
  expect(getByText(/the classic one, yo/i)).toBeInTheDocument();

  // check that pizza added to stored cart
  fireEvent.click(getByText(/ajouter au panier/i));
  expect(store.getState().cartReducer.cart).toEqual([fakePizza]);
});
