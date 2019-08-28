import pizzaData from "./pizzas.json";

export const fetchPizzas = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(pizzaData), 1000);
  });

export default fetchPizzas;
