import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";

import Login from "./Login";

describe("Test that Login renders without crashing", () => {
  const wrapper = shallow(<Login />);
  it("should render successfully", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });
  it("should render 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
  it("should render 2 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });
});
