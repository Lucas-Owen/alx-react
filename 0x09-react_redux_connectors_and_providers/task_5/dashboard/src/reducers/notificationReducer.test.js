import { describe, it, expect } from "@jest/globals";
import { initialState, notificationReducer } from "./notificationReducer";
import { fetchNotificationSuccess, markAsRead, setLoadingState, setNotificationFilter } from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { denormalize } from "normalizr";
import { notification } from "../schema/notifications";

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
    const state = notificationReducer(initialState, fetchNotificationSuccess(data));
    const result = denormalize(state.getIn(["notifications", "result"]), [notification], state.getIn(["notifications", "entities"]));
    expect(result).toMatchObject(notRead);
  });
  it("should mark the correct notification as read when MARK_AS_READ is passed", () => {
    const notRead = notificationReducer(initialState, fetchNotificationSuccess(data));
    const index = 2;
    const state = notificationReducer(notRead, markAsRead(index));
    const result = state.getIn(["notifications", "entities", notification.key, index]);
    expect(result).toMatchObject({ id: index, isRead: true });
  });
  it("should set the filter attribute when SET_TYPE_FILTER is passed", () => {
    expect(notificationReducer(initialState, setNotificationFilter(NotificationTypeFilters.URGENT)).toJS()).toMatchObject({ filter: NotificationTypeFilters.URGENT });
  });
  it("should set the loading attribute correctly SET_LOADING_STATE is passed", () => {
    const state = notificationReducer(initialState, setLoadingState(true));
    expect(state.get("loading")).toBe(true);
  });
});
