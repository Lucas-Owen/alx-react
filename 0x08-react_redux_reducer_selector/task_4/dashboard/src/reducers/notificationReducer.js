import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

export const initialState = {
  filter: NotificationTypeFilters.DEFAULT,
  notifications: []
};

export function notificationReducer (state = initialState, action) {
  if (!action) return state;
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        filter: NotificationTypeFilters.DEFAULT,
        notifications: action.data.map(notification => { return { ...notification, isRead: false }; })
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map(notification => notification.id == action.index ? { ...notification, isRead: true } : notification)
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default: return state;
  }
}
