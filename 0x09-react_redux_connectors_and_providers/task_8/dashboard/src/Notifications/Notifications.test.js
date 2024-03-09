/**
 * @jest-environment jsdom
 */
import React from "react";
import { Notifications } from "./Notifications";

import { shallow, mount } from "enzyme";
import { describe, it, expect, jest } from "@jest/globals";
import NotificationItem from "./NotificationItem";

import { StyleSheetTestUtils } from "aphrodite";
import { Seq } from "immutable";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
StyleSheetTestUtils.suppressStyleInjection();

describe("Test that notifications renders without crashing", function () {
  const wrapper = shallow(<Notifications />);
  it("should render without crashing", function () {
    expect(Notifications).toBeDefined();
  });
});

describe("Test that Notifications interprets displayDrawer=false correctly", () => {
  const wrapper = shallow(<Notifications />);
  it("should render menuItem", () => {
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });
  it("should not render div.Notifications", () => {
    expect(wrapper.find("div.Notifications")).toHaveLength(0);
  });
});

describe("Test that Notifications interprets displayDrawer=true correctly", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  it("should not render menuItem", () => {
    expect(wrapper.find(".menuItem")).toHaveLength(0);
  });
  it("should render div.Notifications", () => {
    expect(wrapper.find("div.Notifications")).toHaveLength(1);
  });
  describe("Test that it renders the right number of notifications passed", () => {
    it("should render the text 'No new notifications for now' when no notifications is available", function () {
      expect(wrapper.contains("No new notification for now")).toBeTruthy();
    });
    it("should render the text 'Here is the list of notifications' when any notifications is available", function () {
      const notifications = { guid: 1, type: "priority-default", value: "New course available" };
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={Seq([notifications])} />);
      expect(wrapper.contains("Here is the list of notifications")).toBeTruthy();
    });
    it("should render an arbitrary number of notifications", function () {
      const notificationCount = Math.floor(Math.random() + 1 * 20);
      const notifications = new Array(notificationCount).fill(undefined).map((_, idx) => { return { guid: idx, type: "Test", value: "test" }; });
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={Seq(notifications)} />);
      expect(wrapper.find(NotificationItem)).toHaveLength(notificationCount);
    });
  });
});

describe("Test that displaydrawer handlers are called properly", () => {
  it("should call handleDisplayDrawer when menuItem is clicked", () => {
    const displayDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={displayDrawerMock} />);
    wrapper.find(".menuItem").simulate("click");
    expect(displayDrawerMock).toBeCalled();
  });
  it("should call handleHideDrawer when .Notifications button is clicked", () => {
    const hideDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={hideDrawerMock} />);
    wrapper.find(".Notifications .hideDrawerButton").simulate("click");
    expect(hideDrawerMock).toBeCalled();
  });
});

describe("Test that filterUrgentButton behaves accordingly", () => {
  it("should call setNotificationFilter with URGENT", () => {
    const filterUrgentMock = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} setNotificationFilter={filterUrgentMock} />);
    wrapper.find(".Notifications #filterUrgentButton").simulate("click");
    expect(filterUrgentMock).toBeCalledWith(NotificationTypeFilters.URGENT);
  });
});

describe("Test that filterDefaultButton behaves accordingly", () => {
  it("should call setNotificationFilter with URGENT", () => {
    const filterDefaultMock = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} setNotificationFilter={filterDefaultMock} />);
    wrapper.find(".Notifications #filterDefaultButton").simulate("click");
    expect(filterDefaultMock).toBeCalledWith(NotificationTypeFilters.DEFAULT);
  });
});

describe("Test that fetchNotifications is called when the component is mounted", () => {
  it("should be called", () => {
    const mockFn = jest.fn();
    shallow(<Notifications fetchNotifications={mockFn} />);
    expect(mockFn).toBeCalled();
  });
});


describe("Test to mockup the console.log function", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  const notificationCount = Math.floor(Math.random() + 1 * 20);
  const notifications = new Array(notificationCount).fill(undefined).map((_, idx) => { return { guid: idx, type: "Test", value: "test" }; });
  it("should send the id of the notifications that is clicked", () => {
    const markNotificationAsRead = jest.fn();
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={Seq(notifications)} markNotificationAsRead={markNotificationAsRead} />);
    const notification = wrapper.find("li").get(Math.floor(Math.random() * 20));
    notification.props.onClick();
    expect(markNotificationAsRead).toBeCalledWith(notification.props.id);
  });
});

// describe("Test that Notifications behaves like a Pure Component", () => { //Function was removed
//   afterEach(() => {
//     jest.restoreAllMocks();
//   });
//   const notificationCount = Math.floor(Math.random() + 1 * 20);
//   const notifications = new Array(notificationCount).fill(undefined).map((_, idx) => { return { id: idx, type: "Test", value: "test" }; });
//   const props = {listNotifications: notifications, displayDrawer: true};
//   const wrapper = shallow(<Notifications {...props} />);
//   it("should not rerender while updating the props with the same list", ()=>{
//     const shouldUpdateSpy = jest.spyOn(wrapper.instance(), "shouldComponentUpdate");
//     wrapper.setProps({listNotifications: notifications})
//     expect(shouldUpdateSpy).toHaveReturnedWith(false);
//   })
//   it("should rerender while updating the props with a longer list", ()=>{
//     const shouldUpdateSpy = jest.spyOn(wrapper.instance(), "shouldComponentUpdate");
//     wrapper.setProps({listNotifications: notifications.concat([{ id: notificationCount, type: "Test", value: "test" }])})
//     expect(shouldUpdateSpy).toHaveReturnedWith(true);
//   })
// });
