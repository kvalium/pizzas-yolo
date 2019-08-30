import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from "react-redux";
import rootReducer from "../../../store/rootReducer";

import PizzaListContainer from "../PizzaListContainer";

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}

test("filters pizzas", () => {
  const fakePizzas = [
    {id: 1, name: "Margherita", price: 10, desc: "awesome pizza"},
    {id: 2, name: "Marina", price: 20, desc: "more awesome pizza"},
    {id: 3, name: "Regina", price: 12, desc: "best pizza"},
  ];

  const { getByPlaceholderText } = renderWithRedux(
    <PizzaListContainer />,
    { initialState: 
      {
        pizzaReducer: {
          pizzas: fakePizzas
        }
      }
    }
  );

  // check 
  const input = getByPlaceholderText('nom de la pizza');
  input.value = 'Mar';
  fireEvent.change(input);
})