import React from "react";

import { Cart } from "../Cart";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("trigger function when empty cart is clicked", () => {
  const mockFlush = jest.fn();
  const wrapper = shallow(<Cart flushCart={mockFlush} cart={[]} />);
  wrapper.find("button").simulate("click");
  expect(mockFlush).toHaveBeenCalledTimes(1);
});

it("displays expected cart data", () => {
  const testCart = [
    { name: "A", desc: "a item", price: 10 },
    { name: "B", desc: "b item", price: 20 },
    { name: "C", desc: "c item", price: 30 }
  ];

  const wrapper = shallow(<Cart cart={testCart} flushCart={() => {}} />);
  for (const item of wrapper.find("ul").children()) {
    expect(item.text()).toEqual("A");
  }
});
