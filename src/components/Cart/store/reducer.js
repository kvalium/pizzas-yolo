const initialState = {
  cart: []
};

/**
 * Cart Redux reducer
 * Add item to an existing cart
 * Flush cart
 *
 * @param {Object} state Cart reducer current state
 * @param {Object} action Dispatched action
 */
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cart: [...state.cart, action.product] };
    case "FLUSH_CART":
      return { ...state, cart: initialState.cart };
    default:
      return state;
  }
};

export default cartReducer;
