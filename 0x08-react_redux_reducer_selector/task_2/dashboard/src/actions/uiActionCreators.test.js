import { describe, it, expect, jest } from '@jest/globals';
import { displayNotificationDrawer, hideNotificationDrawer, login, loginRequest, logout } from './uiActionCreators';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './uiActionTypes';


import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('node-fetch');
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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


describe("Test for loginRequest action", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  const email = 'email@domain.com';
  const password = 'pasWord?';
  it("should dispatch LOGIN and LOGIN_SUCCESS when request succeeds", () => {
    const store = mockStore({});
    fetchMock.get("http://localhost:8564/login-success.json", { status: 200 });
    return store.dispatch(loginRequest(email, password))
      .then(() => {
        const actionsReceived = store.getActions();
        expect(actionsReceived).toEqual([{ type: LOGIN, user: { email, password } }, { type: LOGIN_SUCCESS }]);
      });
  });
  it("should dispatch LOGIN and LOGIN_FAILURE when request fails", () => {
    const store = mockStore({});
    fetchMock.get("http://localhost:8564/login-success.json", { status: 403 });
    return store.dispatch(loginRequest(email, password))
      .then(() => {
        const actionsReceived = store.getActions();
        expect(actionsReceived).toEqual([{ type: LOGIN, user: { email, password } }, { type: LOGIN_FAILURE }]);
      });
  });
});
