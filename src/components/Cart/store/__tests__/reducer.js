import cartReducer from "../reducer";

const initialState = {
  cart: []
};

const currentState = {
  cart: [10, 5, 4, 2]
};

it("render the initial state when undefined action is called", () => {
  expect(cartReducer(initialState, { type: "UNKNOWN" })).toEqual(initialState);
});

it("returns updated state on flush cart action", () => {
  const action = { type: "FLUSH_CART" };
  expect(cartReducer(currentState, action)).toEqual({
    ...currentState,
    cart: []
  });
});

it("returns updated state on product added to cart action", () => {
  const action = { type: "ADD_PRODUCT_TO_CART", product: 99 };
  expect(cartReducer(currentState, action)).toEqual({
    ...currentState,
    cart: [10, 5, 4, 2, 99]
  });
});
