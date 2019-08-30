import * as pizzaActions from "../actions";

const fakePizzas = [
  { id: 1, name: "Margherita", price: 10, desc: "Best pizza ever" },
  { id: 2, name: "Regina", price: 12, desc: "Awesome pizza" },
  { id: 3, name: "Del Mare", price: 13, desc: "Yummy pizza" }
];

export const testCases = [
  {
    description:
      "returns expected action when Flush cart action creator is called",
    actionCreator: pizzaActions.deletePizzaList(),
    expectedAction: {
      type: "DELETE_PIZZA_LIST"
    }
  },
  {
    description: "returns expected action when product added to cart",
    actionCreator: pizzaActions.appendPizzaList(fakePizzas),
    expectedAction: {
      type: "APPEND_PIZZA_LIST",
      pizzas: fakePizzas
    }
  },
  {
    description: "returns expected action when product added to cart",
    actionCreator: pizzaActions.appendPizzaList(),
    expectedAction: {
      type: "APPEND_PIZZA_LIST",
      pizzas: undefined
    }
  }
];
