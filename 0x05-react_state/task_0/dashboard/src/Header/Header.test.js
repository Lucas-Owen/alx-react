import React from "react";
import Header from "./Header";

import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";

import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("Test that Header renders without crashing", () => {
  const wrapper = shallow(<Header />);
  it("should render successfully", () => {
    expect(wrapper.hasClass("App-header")).toBeTruthy();
  });
  it("renders an img tag", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });
  it("renders an h1 tag", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
