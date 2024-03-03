import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map } from "immutable";
import { notificationNormalizer, notification } from "../schema/notifications";

export const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: []
});

export function notificationReducer (state = initialState, action) {
  if (!action) return state;
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = notificationNormalizer(action.data);

      return state.merge(
        Map({
          filter: NotificationTypeFilters.DEFAULT,
          notifications: Map(normalizedNotifications).withMutations(map => {
            normalizedNotifications.result.forEach(id => map.setIn(["entities", notification.key, id, "isRead"], false));
            return map;
          })
        }));
    case MARK_AS_READ:
      return state.setIn(["notifications", "entities", notification.key, action.index, "isRead"], true);
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default: return state;
  }
}
