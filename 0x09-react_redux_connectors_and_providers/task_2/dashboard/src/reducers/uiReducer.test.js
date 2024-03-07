import { describe, it, expect } from "@jest/globals";
import { UIReducer, initialState } from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer, login, loginSuccess, logout } from "../actions/uiActionCreators";

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
  const email = "fakemail@mailservice.service";
  const password = "somepassword";
  it("should change the user to the user passed in on login", () => {
    const state = UIReducer(initialState, login(email, password));
    expect(state.toJS()).toMatchObject({ user: { email, password } });
  });
  it("should change isUserLoggedIn to true when loginsucess is passed", ()=>{
    const state = UIReducer(initialState, loginSuccess());
    expect(state.toJS()).toMatchObject({ isUserLoggedIn: true });
  });
  it("should change user to null and isUserLoggedIn to false when logout is passed", () => {
    const state = UIReducer(initialState, login(email, password));
    expect(UIReducer(state, logout()).toJS()).toMatchObject({ user: null });
  });
});
