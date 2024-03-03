import { notification } from "../schema/notifications";
import { Map } from "immutable";
export const filterTypeSelected = (state) => state.getIn(['filter']);
export const getNotifications = state => Map(state.getIn(["notifications", "entities", notification.key]));
export const getUnreadNotifications = state => getNotifications(state).filter(notification => !notification.isRead);
