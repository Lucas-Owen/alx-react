import React from "react";
import PropTypes from "prop-types";

import "./Notifications.css";

import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

function Notifications ({ displayDrawer = false }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="priority-default" value="New course available" />
          <NotificationItem type="priority-urgent" value="New resume available" />
          <NotificationItem type="priority-urgent" html={{ __html: getLatestNotification() }} />
        </ul>
        <button style={{ float: "right" }} aria-label={"Close"} onClick={() => console.log("Close button has been clicked")}>
          <img className="close-icon" src="./close-icon.png" alt="close-icon" />
        </button>
      </div>}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

export default Notifications;
