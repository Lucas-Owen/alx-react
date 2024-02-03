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
  it("should render three NotificationItem elements", function () {
    expect(wrapper.find(NotificationItem).length).toEqual(3);
  });
  it("should render the text 'Here is the list of notifications'", function () {
    expect(wrapper.contains("Here is the list of notifications")).toBeTruthy();
  });
});
// test that Notifications renders without crashing
// verify that Notifications renders three list items
// verify that Notifications renders the text Here is the list of notifications
