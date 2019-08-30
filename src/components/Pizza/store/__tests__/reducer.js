import pizzaReducer from "../reducer";

const initialState = {
  pizzas: []
};

const fakePizzas = [
  { id: 1, name: "Margherita", price: 10, desc: "Best pizza ever" },
  { id: 2, name: "Regina", price: 12, desc: "Awesome pizza" },
  { id: 3, name: "Del Mare", price: 13, desc: "Yummy pizza" }
];

const currentState = {
  pizzas: fakePizzas
};

test("render the initial state when undefined action is called", () => {
  expect(pizzaReducer(initialState, { type: "UNKNOWN" })).toEqual(initialState);
});

test("delete pizza list", () => {
  const action = { type: "DELETE_PIZZA_LIST" };
  expect(pizzaReducer(currentState, action)).toEqual({
    ...currentState,
    pizzas: []
  });
});

test("append pizza list", () => {
  const action = { type: "APPEND_PIZZA_LIST", pizzas: fakePizzas };
  expect(pizzaReducer(initialState, action)).toEqual({
    ...initialState,
    pizzas: fakePizzas
  });
});
