import { message } from "../schema/notifications";
import { Map } from "immutable";
export const filterTypeSelected = (state) => state.getIn(['filter']);
export const getNotifications = state => Map(state.notifications.getIn(["notifications", "entities", message.key]));
export const getUnreadNotifications = state => getNotifications(state).filter(notification => !notification.isRead).valueSeq();
