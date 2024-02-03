import React from "react";
import Notification from "./Notifications";

import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";
import NotificationItem from "./NotificationItem";

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
  it("should render the text 'Here is the list of notifications'", function () {
    expect(wrapper.contains("Here is the list of notifications")).toBeTruthy();
  });
});
