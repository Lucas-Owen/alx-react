import React from "react";
import { Header } from "./Header";

import { shallow } from "enzyme";
import { describe, it, expect, jest } from "@jest/globals";

import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { defaultUser } from "../App/AppContext";
StyleSheetTestUtils.suppressStyleInjection();

describe("Test that Header renders without crashing", () => {
  const wrapper = shallow(<Header user={{...defaultUser}}/>);
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
  it("should not create logOutSection when user is not logged in", () => {
    const wrapper = shallow(<Header user={{...defaultUser}}/>);
    expect(wrapper.find("#logoutSection").length).toBe(0);
  });
  it("should render logOutSection when user is logged in", () => {
    const wrapper = shallow(<Header user={{...defaultUser, isLoggedIn: true}}/>);
    expect(wrapper.find("#logoutSection").length).toBe(1);
  });
  it("should call logOut funciton when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<Header user={{...defaultUser, isLoggedIn: true}} logout={logOutMock.mockImplementation()}/>);
    wrapper.find("a").simulate("click");
    expect(logOutMock).toBeCalled();
  });
});
