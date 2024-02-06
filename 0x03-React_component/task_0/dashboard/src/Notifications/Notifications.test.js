import React from "react";
import Notification from "./Notifications";

import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";
import NotificationItem from "./NotificationItem";;

describe("Test that notifications renders without crashing", function () {
  const wrapper = shallow(<Notification />);
  it("should render without crashing", function () {
    expect(wrapper.find(Notification)).toBeTruthy();
  });
});

describe("Test that Notifications interprets displayDrawer=false correctly", () => {
  const wrapper = shallow(<Notification />);
  it("should render menuItem", () => {
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });
  it("should not render div.Notifications", () => {
    expect(wrapper.find("div.Notifications")).toHaveLength(0);
  });
});

describe("Test that Notifications interprets displayDrawer=true correctly", () => {
  const wrapper = shallow(<Notification displayDrawer={true}/>);
  it("should render menuItem", () => {
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });
  it("should render div.Notifications", () => {
    expect(wrapper.find("div.Notifications")).toHaveLength(1);
  });
  describe("Test that it renders the right number of notifications passed", ()=>{
    it("should render the text 'No new notification for now' when no notification is available", function () {
      expect(wrapper.contains("No new notification for now")).toBeTruthy();
    });
    it("should render the text 'Here is the list of notifications' when any notification is available", function () {
      const notification = {id: 1, type:"priority-default", value:"New course available" };
      const wrapper = shallow(<Notification displayDrawer={true} listNotifications={[notification]}/>)
      expect(wrapper.contains("Here is the list of notifications")).toBeTruthy();
    });
    it("should render an arbitrary number of notifications", function () {
      const notificationCount = Math.floor(Math.random()*20) + 1;
      const notifications = new Array(notificationCount).fill(undefined).map((_, idx) => {return {id: idx, type: "Test", value: "test"};})
      const wrapper = shallow(<Notification displayDrawer={true} listNotifications={notifications}/>)
      expect(wrapper.find(NotificationItem)).toHaveLength(notificationCount);
    });
  })
});
