import { describe, it, expect } from "@jest/globals";
import { UIReducer, initialState } from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";

describe("Test for uiReducer function", () => {
  it("should return the initialState when no action is passsed", () => {
    expect(UIReducer()).toEqual(initialState);
  });
  it("should return the initialState when the action is not supported", () => {
    expect(UIReducer({}, selectCourse(0))).toEqual(initialState);
  });
  it("should change the isNotificationDrawerVisible property to true when DISPLAY_NOTIFICATION_DRAWER action is passed", () => {
    expect(UIReducer(initialState, displayNotificationDrawer()).toJS()).toMatchObject({ isNotificationDrawerVisible: true });
  });
});
