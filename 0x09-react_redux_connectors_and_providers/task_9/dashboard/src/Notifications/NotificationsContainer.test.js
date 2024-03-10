import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect, jest } from "@jest/globals";
import { NotificationsContainer } from "./NotificationsContainer";

describe("Test for when the component mounts", () => {
  it("should call fetchNotifications", () => {
    const mockFn = jest.fn();
    shallow(<NotificationsContainer fetchNotifications={mockFn} />);
    expect(mockFn).toBeCalled();
  });
});
