import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";

export default function Notifications () {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data="priority-default">New course available</li>
        <li data="priority-urgent">New resume available</li>
        <li data="priority-urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      <button style={{ float: "right" }} aria-label={"Close"} onClick={() => console.log("Close button has been clicked")}>
        <img className="close-icon" src="./close-icon.png" alt="close-icon" />
      </button>
    </div>
  );
}
