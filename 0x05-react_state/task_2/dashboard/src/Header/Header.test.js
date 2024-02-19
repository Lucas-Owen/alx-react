/**
 * @jest-environment jsdom
 */
import React from "react";
import Header from "./Header";

import { shallow, mount } from "enzyme";
import { describe, it, expect, jest } from "@jest/globals";

import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";
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

describe("Test that Header interprets context as expected", () => {
  it("should not create logOutSection with a default context value", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find("#logoutSection").length).toBe(0);
  });
  it("should render logOutSection with valid user context", () => {
    const wrapper = mount(<AppContext.Provider value={{ user: { email: "email@domain.com", password: "pass", isLoggedIn: true }, logOut: () => {} }}><Header /></AppContext.Provider>);
    expect(wrapper.find("#logoutSection").length).toBe(1);
  });
  it("should call logOut funciton when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const wrapper = mount(<AppContext.Provider value={{ user: { email: "email@domain.com", password: "pass", isLoggedIn: true }, logOut: logOutMock.mockImplementation() }}><Header /></AppContext.Provider>);
    wrapper.find("a").simulate("click");
    expect(logOutMock).toBeCalled();
  });
});
