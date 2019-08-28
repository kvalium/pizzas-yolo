/**
 * Set the pizza list
 * @param {Object[]} pizzaList
 */
export const appendPizzaList = pizzaList => ({
  type: "APPEND_PIZZA_LIST",
  pizzas: pizzaList
});

/**
 * Delete pizza list
 */
export const deletePizzaList = () => ({
  type: "DELETE_PIZZA_LIST"
});
