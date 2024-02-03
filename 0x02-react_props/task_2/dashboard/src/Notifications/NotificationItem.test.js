import React from "react";

import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";

import NotificationItem from "./NotificationItem";

describe("Test that NotificationItem renders without crashing", () => {
  it("should render a li tag", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.find(`li`)).toHaveLength(1);
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
