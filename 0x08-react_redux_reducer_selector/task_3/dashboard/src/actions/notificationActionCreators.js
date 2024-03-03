import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export function markAsRead (index) {
	return { type: MARK_AS_READ, index };
}
export function setNotificationFilter (filter) {
	return { type: SET_TYPE_FILTER, filter };
}
export function fetchNotificationSuccess (data) {
	return { type: FETCH_NOTIFICATIONS_SUCCESS, data };
}

export const boundMarkAsRead = (index) => dispatch => dispatch(markAsRead(index));

export const boundSetNotificationFilter = (filter) => dispatch => dispatch(setNotificationFilter(filter));
