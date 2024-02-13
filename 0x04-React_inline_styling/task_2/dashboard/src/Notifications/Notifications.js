import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.state = { ...props };
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead (id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (nextProps.listNotifications.length > this.state.listNotifications.length);
  }

  render () {

    const { displayDrawer, listNotifications } = this.state;

    return (
      <>
        <div className={css(styles["all"], styles["menuItem"]) + " menuItem"}>Your notifications</div>
        {displayDrawer ?
          <div className={css(styles["all"], styles["Notifications"]) + " Notifications"}>
            {listNotifications.length ?
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map(notification => <NotificationItem key={notification.id} id={notification.id} {...notification} markAsRead={this.markAsRead} />)}
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
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.displayName = "Notifications";

const styles = StyleSheet.create({
  "all": {
    position: "absolute",
    right: "8px",
    background: "white",

    "--button-width": "15px",
    "--button-offset": "8px",
    "--menu-item-height": "2rem",
    "--menu-item-padding": "0rem",
    "--menu-item-margin-top": "0px",
    "--menu-item-margin-bottom": "0rem",
    "--menu-item-border-width": "0rem",

    "--notifications-padding": "0.8rem",
    "--notifications-border-width": "0.15rem",
    "--notifications-margin": "0rem",
  },
  "menuItem": {
    padding: "var(--menu-item-padding)",
    height: "var(--menu-item-height)",
    lineHeight: "var(--menu-item-height)",
    marginTop: "var(--menu-item-margin-top)",
    marginBottom: "var(--menu-item-margin-bottom)",
    borderWidth: "var(--menu-item-border-width)",
  },
  "Notifications": {
    padding: "var(--notifications-padding)",
    border: "var(--notifications-border-width) dotted var(--color-primary)",
    margin: "var(--notifications-margin)",
    borderRadius: "0.4rem",
    top: "calc(var(--menu-item-padding) + var(--menu-item-height) + var(--menu-item-margin-top) + var(--menu-item-margin-bottom) + var(--menu-item-border-width) + var(--notifications-margin) + var(--notifications-border-width))",
    ":nth-child(1n) button": {
      position: "absolute",
      top: "var(--button-offset)",
      right: "var(--button-offset)",
    },
    ":nth-child(1n) .close-icon": {
      width: "15px",
      height: "15px",
    },
    ":nth-child(1n) [data-notification-type*='default']": {
      color: "blue",
    },
    ":nth-child(1n) [data-notification-type*='urgent']": {
      color: "red",
    }
  }
});

export default Notifications;
