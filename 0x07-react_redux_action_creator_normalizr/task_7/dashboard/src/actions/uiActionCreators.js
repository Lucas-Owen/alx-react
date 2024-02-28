import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./uiActionTypes";
import fetch from "node-fetch";

export function login (email, password) {
  return { type: LOGIN, user: { email, password } };
}

export function logout () {
  return { type: LOGOUT };
}

export function loginSuccess () {
  return { type: LOGIN_SUCCESS };
}

export function loginFailure () {
  return { type: LOGIN_FAILURE };
}

export function loginRequest (email, password) {
  return async (dispatch) => {
    boundLogin(email, password)(dispatch);
    const action = await fetch("http://localhost:8564/login-success.json")
      .then((response) => {
        return response.status == 200? loginSuccess(): loginFailure();
      })
      .catch(error => {
        return loginFailure();
      });
    dispatch(action);
    return action;
  };
}

export function displayNotificationDrawer () {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer () {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

export const boundLogin = (email, password) => dispatch => dispatch(login(email, password));

export const boundLogout = () => dispatch => dispatch(logout());

export const boundDisplayNotificationDrawer = () => dispatch => dispatch(displayNotificationDrawer());

export const boundHideNotificationDrawer = () => dispatch => dispatch(hideNotificationDrawer());
