import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/uiActionTypes";
import { Map } from "immutable";

export const initialState = new Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null
});

export function UIReducer (state = initialState, action) {
  const stateMap = new Map(state);
  if (!action) return state;
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return stateMap.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return stateMap.set("isNotificationDrawerVisible", false);
    case LOGIN:
      return stateMap.set("user", action.user);
    case LOGIN_SUCCESS:
      return stateMap.set("isUserLoggedIn", true);
    case LOGIN_FAILURE:
      return stateMap.set("isUserLoggedIn", false);
    case LOGOUT:
      return stateMap.set("isUserLoggedIn", false).set("user", null);
    default: return initialState;
  }
}
