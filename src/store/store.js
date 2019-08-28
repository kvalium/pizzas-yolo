import { createStore } from "redux";

import rootReducer from "./rootReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("pizzaYolo");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("pizzaYolo", serializedState);
  } catch {
    // ignore write errors
  }
};

const preloadedState = loadState();

// const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
