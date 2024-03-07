import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";

import Login from "./Login";

import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("Test that Login renders without crashing", () => {
  const wrapper = shallow(<Login />);
  it("should render successfully", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });
  it("should render 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
  it("should render 3 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(3);
  });
});

describe("Test that submit button behaves as expected", () => {
  it("should be disabled by default", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().enableSubmit).toBeDefined();
    expect(wrapper.state().enableSubmit).toBe(false);
    expect(wrapper.find("input[disabled]")).toHaveLength(1);
  });
  it("should be enabled when there is input in the two fields", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("[name='email']").simulate("change", {target:{value: "fakemail@domain.com", name: "email"}})
    wrapper.find("[name='password']").simulate("change", {target:{value: "fakeP@ssw0rd", name: "password"}})
    expect(wrapper.state().enableSubmit).toBe(true);
  });
});
