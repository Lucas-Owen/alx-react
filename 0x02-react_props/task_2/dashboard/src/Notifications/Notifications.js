import React from "react";
import "./Notifications.css";

import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

export default function Notifications () {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="priority-default" value="New course available" />
        <NotificationItem type="priority-urgent" value="New resume available" />
        <NotificationItem type="priority-urgent" html={{ __html: getLatestNotification() }} />
      </ul>
      <button style={{ float: "right" }} aria-label={"Close"} onClick={() => console.log("Close button has been clicked")}>
        <img className="close-icon" src="./close-icon.png" alt="close-icon" />
      </button>
    </div>
  );
}
