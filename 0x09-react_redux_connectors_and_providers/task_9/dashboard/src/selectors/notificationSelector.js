import { createSelector } from "reselect";
import { message } from "../schema/notifications";
import { Map } from "immutable";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
export const filterTypeSelected = (state) => state.getIn(['filter']);
export const getNotifications = state => Map(state.notifications.getIn(["notifications", "entities", message.key]));
export const getUnreadNotificationsByType = createSelector([state => state], state => {
  const filter = state.notifications.get("filter");
  if (filter == NotificationTypeFilters.URGENT)
    return getNotifications(state).filter(notification => !notification.isRead && notification.type === NotificationTypeFilters.URGENT).valueSeq();
  return getNotifications(state).filter(notification => !notification.isRead).valueSeq();
});
