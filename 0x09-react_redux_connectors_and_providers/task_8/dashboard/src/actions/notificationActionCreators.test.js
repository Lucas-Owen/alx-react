import { describe, it, expect } from "@jest/globals";
import { fetchNotifications, markAsRead, setLoadingState, setNotificationFilter, setNotifications } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

describe("Test for markAsRead action creator", () => {
	it("should return an action with type MARK_AS_READ and index passed in", () => {
		const index = 1;
		expect(markAsRead(index)).toEqual({
			type: MARK_AS_READ,
			index
		});
	});
});

describe("Test for setNotificationsFilter action creator", () => {
	it("should return an action with type SET_TYPE_FILTER and filter passed in", () => {
		const filter = NotificationTypeFilters.DEFAULT;
		expect(setNotificationFilter(filter)).toEqual({
			type: SET_TYPE_FILTER,
			filter
		});
	});
});

describe("Test for setLoadingState", () => {
	it("should return an action with type SET_LOADING_STATE and loading boolean", () => {
		expect(setLoadingState(false)).toEqual({ type: SET_LOADING_STATE, loading: false });
	});
});

describe("Test for setNotifications", ()=>{
	it("should return an action with FETCH_NOTIFICATIONS_SUCCESS and data", ()=>{
		expect(setNotifications('data')).toMatchObject({type: FETCH_NOTIFICATIONS_SUCCESS, data: 'data'})
	})
})
