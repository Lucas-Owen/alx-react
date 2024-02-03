import React from "react";
import App from "../Notifications/Notifications";

import { shallow } from "enzyme";
import { it, describe, expect } from "@jest/globals";

describe("Test that App renders without crashing", function () {
  it("should render App without crashing", function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toBeTruthy();
  });
});

describe("Divs with classnames are rendered", function () {
  const wrapper = shallow(<App />);
  it("should render a div with the class App-header", function () {
    expect(wrapper.find("div.App-header")).toBeTruthy();
  });

  it("should render a div with the class App-body", function () {
    expect(wrapper.find("div.App-body")).toBeTruthy();
  });

  it("should render a div with the class App-footer", function () {
    expect(wrapper.find("div.App-footer")).toBeTruthy();
  });
});
