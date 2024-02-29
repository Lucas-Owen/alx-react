import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./uiActionTypes";

export function login (email, password) {
  return { type: LOGIN, user: { email, password } };
}

export function logout () {
  return { type: LOGOUT };
}

export function displayNotificationDrawer () {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer () {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

export const boundLogin = (email, password) => (dispatch) => dispatch(login(email, password));

export const boundLogout = (dispatch) => dispatch(logout());

export const boundDisplayNotificationDrawer = (dispatch) => dispatch(displayNotificationDrawer());

export const boundHideNotificationDrawer = (dispatch) => dispatch(hideNotificationDrawer());
