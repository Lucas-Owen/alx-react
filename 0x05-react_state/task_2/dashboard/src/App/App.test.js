/**
 * @jest-environment jsdom
 */
import React from "react";
import { act } from 'react-dom/test-utils';
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

import { shallow, mount } from "enzyme";
import { it, describe, expect, jest } from "@jest/globals";
import CourseList from "../CourseList/CourseList";


describe("Test that App renders without crashing", function () {
  const wrapper = shallow(<App />);
  it("should contain the Notifications component", function () {
    expect(Notifications).toBeDefined();
  });
  it("should contain the Header component", function () {
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it("should contain the Login component", function () {
    expect(wrapper.containsMatchingElement(<Login />)).toBeTruthy();
  });

  it("should contain the Footer component", function () {
    expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
  });
  it("should not contain the CourseList component", function () {
    expect(wrapper.containsMatchingElement(<CourseList />)).toBeFalsy();
  });
  it("should contain a prop displayDrawer=false", () => {
    expect(wrapper.state().displayDrawer).toBe(false);
  });
  it("should have a function handleDisplayDrawer that changes displayDrawer to true", () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });
  it("should have a function handleHideDrawer that changes displayDrawer to false", () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});

describe("Test for logIn", () => {
  it("should change the state to the current user", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    act(() => { wrapper.instance().logIn('email', 'password'); });
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });
});

describe("Test when App receives ctrl+h", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  const wrapper = mount(<App />);
  const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });
  const alertMock = jest.spyOn(window, "alert");
  alertMock.mockImplementation((message) => {});
  document.dispatchEvent(event);

  it("should call logOut", () => {
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });
  it("should call alert with the string 'Logging you out'", () => {
    expect(alertMock).toBeCalledWith("Logging you out");
  });
})

