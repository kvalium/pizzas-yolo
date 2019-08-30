import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithRedux } from "../../../testUtils";
import PizzaListContainer from "../PizzaListContainer";

const fakePizzas = [
  {id: 1, name: "Margherita", price: 10, desc: "awesome pizza"},
  {id: 2, name: "Marina", price: 20, desc: "more awesome pizza"},
  {id: 3, name: "Regina", price: 12, desc: "best pizza"},
];

const populatedStore = {
  initialState: 
  {
    pizzaReducer: {
      pizzas: fakePizzas
    }
  }
}

describe("pizzas from the store", () => {
  test("display pizzas", () => {

    const { getByText, queryByText } = renderWithRedux(
      <PizzaListContainer />, 
      populatedStore
    );
  
    // checks that all pizzas are displayed
    for(const fakePizza of fakePizzas){
      expect(getByText(fakePizza.name)).toBeInTheDocument();
    }
    // checks that filter message ain't displayed the full list is displayed
    expect(queryByText("pizza(s) trouvée(s)")).toBe(null);
  });
  
  test("filter returns results", () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithRedux(
      <PizzaListContainer />, 
      populatedStore
    );
  
    // use filter, check that pizza list moved accordingly
    const input = getByPlaceholderText('nom de la pizza');
    fireEvent.change(input, {
      target: { value: "Mar" },
    });
    expect(input.value).toBe("Mar");
    // filter label should now be displayed
    expect(getByText(/2 pizza\(s\) trouvée\(s\)/i)).toBeInTheDocument();
    // Regina will not be displayed
    expect(queryByText(/regina/i)).toBe(null);
  });
  
  test("filter returns nothing", () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithRedux(
      <PizzaListContainer />, 
      populatedStore
    );
  
    // use filter, check that pizza list moved accordingly
    const input = getByPlaceholderText('nom de la pizza');
    fireEvent.change(input, {
      target: { value: "XXXXXXX" },
    });
    expect(input.value).toBe("XXXXXXX");
    // filter label should now be displayed
    expect(getByText(/aucune pizza\(s\) trouvée\(s\)/i)).toBeInTheDocument();
    // checks that no pizzas are displayed
    for(const fakePizza of fakePizzas){
      expect(queryByText(fakePizza.name)).toBe(null);
    }
  });
});

describe("pizzas from the API", () => {
  test("display load screen while fetching data", () => {
    const { getByText } = renderWithRedux(<PizzaListContainer />);
    expect(getByText(/chargement des pizzas.../i)).toBeInTheDocument();
  })
});
