/**
 * @jest-environment jsdom
 */
import React from "react";
import { act } from 'react-dom/test-utils';
import { App, mapStateToProps } from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

import { shallow } from "enzyme";
import { it, describe, expect, jest } from "@jest/globals";
import CourseList from "../CourseList/CourseList";

import { fromJS } from "immutable";


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
});

// describe("Test for markNotificationAsRead", () => {
//   it("should remove a notification with the specified id when called", () => {
//     const notifications = [{ id: 1, type: "priority-default", value: "New course available" }];
//     const wrapper = shallow(<App listNotifications={notifications} />);
//     const originalNotificationsLength = notifications.length;
//     expect(wrapper.state().listNotifications.length).toBe(originalNotificationsLength);
//     act(() => {
//       wrapper.instance().markNotificationAsRead(1);
//     });
//     expect(wrapper.state().listNotifications.length).toBe(originalNotificationsLength - 1);
//   });
// });

describe("Test that mapStateToProps returns the right object", () => {
  it("should return the correct object when it receives a map", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false
      })
    };
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true, displayDrawer: false });
  });
});
