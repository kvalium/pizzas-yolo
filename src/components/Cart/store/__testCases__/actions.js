import * as pizzaActions from "../actions";

export const testCases = [
  {
    description:
      "returns expected action when Flush cart action creator is called",
    actionCreator: pizzaActions.flushCart(),
    expectedAction: {
      type: "FLUSH_CART"
    }
  },
  {
    description: "returns expected action when product added to cart",
    actionCreator: pizzaActions.addProductToCart(10),
    expectedAction: {
      type: "ADD_PRODUCT_TO_CART",
      product: 10
    }
  },
  {
    description: "returns expected action when product added to cart",
    actionCreator: pizzaActions.addProductToCart(),
    expectedAction: {
      type: "ADD_PRODUCT_TO_CART",
      product: undefined
    }
  }
];
