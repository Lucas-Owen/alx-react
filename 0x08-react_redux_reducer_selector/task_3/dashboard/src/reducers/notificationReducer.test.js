import { describe, it, expect } from "@jest/globals";
import { initialState, notificationReducer } from "./notificationReducer";
import { fetchNotificationSuccess } from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

const data = [
  {
    id: 1,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    type: "urgent",
    value: "New data available"
  }
];

describe("Test for notificationReducer", () => {
  it("should set isRead for all notifications to false when it receives a FETCH_NOTIFICATIONS_SUCCESS", () => {
    const notRead = data.map(notification => { return { ...notification, isRead: false }; });
    expect(notificationReducer(initialState, fetchNotificationSuccess(data))).toMatchObject({ filter: NotificationTypeFilters.DEFAULT, notifications: notRead });
  });
});
