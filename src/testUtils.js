import React from 'react';
import {render } from '@testing-library/react';

import { createStore } from 'redux'
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";

/**
 * Wrapper for connected components 
 *
 * @param {Node} ui Component to wrap into a Provider
 * @param {Object} options such as initial state or store
 */
export function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}