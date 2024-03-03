import { describe, it, expect } from "@jest/globals";
import { initialState, notificationReducer } from "./notificationReducer";
import { fetchNotificationSuccess, markAsRead, setNotificationFilter } from "../actions/notificationActionCreators";
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
  it("should mark the correct notification as read when MARK_AS_READ is passed", () => {
    const notRead = notificationReducer(initialState, fetchNotificationSuccess(data));
    const index = 2;
    expect(notificationReducer(notRead, markAsRead(index)).notifications.filter(notification => notification.id == index)).toMatchObject([{ isRead: true }]);
  });
  it("should set the filter attribute when SET_TYPE_FILTER is passed", () => {
    expect(notificationReducer(initialState, setNotificationFilter(NotificationTypeFilters.URGENT))).toMatchObject({ filter: NotificationTypeFilters.URGENT });
  });
});
