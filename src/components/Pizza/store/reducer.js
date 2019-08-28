const initialState = {
  pizzas: []
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPEND_PIZZA_LIST":
      return { ...state, pizzas: action.pizzas };
    case "DELETE_PIZZA_LIST":
      return { ...state, pizzas: initialState.pizzas };
    default:
      return state;
  }
};

export default pizzaReducer;
