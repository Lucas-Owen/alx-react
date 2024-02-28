import { describe, it, expect } from "@jest/globals";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

describe("Test for markAsRead action creatosdr", () => {
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
