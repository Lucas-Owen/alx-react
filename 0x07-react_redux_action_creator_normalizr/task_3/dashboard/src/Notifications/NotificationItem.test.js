import React from "react";

import { shallow } from "enzyme";
import { describe, it, expect, jest } from "@jest/globals";

import NotificationItem from "./NotificationItem";

describe("Test that NotificationItem renders without crashing", () => {
  it("should render a li tag", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.find(NotificationItem)).toBeTruthy();
  });
  it("should have an attribute 'data-notification-type' when type is passed", () => {
    const type = "default";
    const wrapper = shallow(<NotificationItem {...{type: type}}/>);
    expect(wrapper.find(`[data-notification-type="${type}"]`)).toHaveLength(1);
  });
  it("should contain the value as text when passed", () => {
    const value = "List Item";
    const wrapper = shallow(<NotificationItem {...{value: value}}/>);
    expect(wrapper.text()).toContain(value);
  });
  it("should render innerHtmml when passed", () => {
    const html={ __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem {...{html: html}}/>);
    expect(wrapper.html()).toContain(html.__html);
  });
});


describe("Test that notificationItem reacts to events appropriately", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  let notification = null;
  beforeEach(()=>{
    notification = {
      type: "urgent",
      value: "Test Value",
      id: Math.floor(Math.random() * 20),
      markAsRead: jest.fn()
    }
  })
  it("should send the id of the notification that is clicked", () => {
    const wrapper = shallow(<NotificationItem {...notification} />);
    wrapper.find("li").simulate("click");
    expect(notification.markAsRead).toBeCalledWith(notification.id);
  });
});
