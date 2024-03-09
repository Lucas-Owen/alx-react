import fetch from "node-fetch";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from "./notificationActionTypes";

export function markAsRead (index) {
	return { type: MARK_AS_READ, index };
}
export function setNotificationFilter (filter) {
	return { type: SET_TYPE_FILTER, filter };
}
export function fetchNotificationSuccess (data) {
	return { type: FETCH_NOTIFICATIONS_SUCCESS, data };
}
export function setLoadingState (loading) {
	return { type: SET_LOADING_STATE, loading };
}
export function setNotifications (data) {
	return fetchNotificationSuccess(data);
}
export function fetchNotifications () {
	return async (dispatch) => {
		dispatch(setLoadingState(true));
		await fetch("/notifications.json").then(async response => {
			const data = await response.json();
			dispatch(setNotifications(data));
		}).catch((err) => {
			console.log(`Error fetching notifications: ${err}`)
		});
		dispatch(setLoadingState(false));
	};
}

export const boundMarkAsRead = (index) => dispatch => dispatch(markAsRead(index));

export const boundSetNotificationFilter = (filter) => dispatch => dispatch(setNotificationFilter(filter));
