import React from "react";
import PropTypes from "prop-types";

import "./Notifications.css";

import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

function Notifications ({ displayDrawer = false, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ?
        <div className="Notifications">
          {listNotifications && listNotifications.length ?
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map(notification => <NotificationItem key={notification.id} {...notification} />)}
              </ul>
            </>
            :
            <p>No new notification for now</p>
          }
          <button style={{ float: "right" }} aria-label={"Close"} onClick={() => console.log("Close button has been clicked")}>
            <img className="close-icon" src="./close-icon.png" alt="close-icon" />
          </button>
        </div>
        :
        <></>
      }
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
