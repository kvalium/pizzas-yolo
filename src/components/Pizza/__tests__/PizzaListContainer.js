import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../../../store/store";

import PizzaListContainer from "../PizzaListContainer";

it("renders", () => {
  const { getByPlaceholderText } = render(<Provider store={store}><PizzaListContainer pizzas={[{name: "plop"}]}/></Provider>);
  const input = getByPlaceholderText('nom de la pizza')
  input.value = '2'
  fireEvent.change(input)
})