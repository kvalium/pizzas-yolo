import * as cartActions from "../actions";

export const testCases = [
  {
    description:
      "returns expected action when Flush cart action creator is called",
    actionCreator: cartActions.flushCart(),
    expectedAction: {
      type: "FLUSH_CART"
    }
  },
  {
    description: "returns expected action when product added to cart",
    actionCreator: cartActions.addProductToCart(10),
    expectedAction: {
      type: "ADD_PRODUCT_TO_CART",
      product: 10
    }
  },
  {
    description: "returns expected action when product added to cart",
    actionCreator: cartActions.addProductToCart(),
    expectedAction: {
      type: "ADD_PRODUCT_TO_CART",
      product: undefined
    }
  }
];
