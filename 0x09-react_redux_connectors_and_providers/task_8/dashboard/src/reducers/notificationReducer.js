import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, NotificationTypeFilters, SET_LOADING_STATE, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map } from "immutable";
import { notificationNormalizer, message, notification } from "../schema/notifications";

export const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: Map(),
  loading: false
});

export function notificationReducer (state = initialState, action) {
  if (!action) return state;
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = Map(notificationNormalizer(action.data));
      return state.mergeDeep(
        Map({
          filter: NotificationTypeFilters.DEFAULT,
          notifications: normalizedNotifications.withMutations(map => {
            normalizedNotifications.get("result").forEach(id =>
              map.setIn(["entities", message.key, normalizedNotifications.getIn(["entities", notification.key, id, "context"]), "isRead"], false)
            );
            return map;
          })
        }));
    case MARK_AS_READ:
      return state.setIn(["notifications", "entities", message.key, action.index, "isRead"], true);
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    case SET_LOADING_STATE:
      return state.set("loading", action.loading);
    default: return state;
  }
}
