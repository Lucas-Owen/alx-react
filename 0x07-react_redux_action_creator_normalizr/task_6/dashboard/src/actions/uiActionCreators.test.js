import { describe, it, expect } from '@jest/globals';
import { displayNotificationDrawer, hideNotificationDrawer, login, logout } from './uiActionCreators';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from './uiActionTypes';

describe("Test for login", () => {
  it("should return an object with type LOGIN and user", () => {
    const email = 'nobody@domain.com';
    const password = 'password';
    expect(login(email, password)).toEqual({ type: LOGIN, user: { email, password } });
  });
});

describe("Test for logout, displayNotificationsDrawer, hideNotificationsDrawer", () => {
  it("should return an object with appropriate type", () => {
    expect(logout()).toEqual({ type: LOGOUT });
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
