import { describe, it, expect } from "@jest/globals";
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";
import { initialState, notificationReducer } from "../reducers/notificationReducer";
import { fetchNotificationSuccess } from "../actions/notificationActionCreators";
import { Map } from "immutable";
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

describe("Test for notificationSelectors", () => {
  describe("Test for filterTypeSelected", () => {
    it("should return the value of the filter", () => {
      expect(filterTypeSelected(notificationReducer())).toEqual(initialState.get("filter"));
    });
  });
  describe("Test for getNotifications", () => {
    it("should return a list of notifications in map format", () => {
      const state = notificationReducer(Map({}), fetchNotificationSuccess(data));
      const notifications = getNotifications(state);
      expect(notifications.equals(Map(state.getIn(["notifications", "entities", notification.key])))).toBe(true);
    });
  });
  describe("Test for getUnreadNotifications", () => {
    it("should return a list of unread notifications in map format", () => {
      const state = notificationReducer(Map({}), fetchNotificationSuccess(data));
      const notifications = getUnreadNotifications(state);
      const results = notifications.toList().toArray();
      results.forEach(obj => expect(obj).toMatchObject({ isRead: false }));
    });
  });
});
