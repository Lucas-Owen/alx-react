import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite/no-important";
import { Seq } from "immutable";

import NotificationItem from "./NotificationItem";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

export default function Notifications(props) {

    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead, setNotificationFilter } = props;
    return (
      <>
        {displayDrawer ?
          <div className={css(styles["all"], styles["Notifications"]) + " Notifications"}>
            <p className={css(styles["p"])}>{listNotifications.size ? "Here is the list of notifications" : "No new notification for now"}</p>
            <button className={css(styles["filterButton"])} id="filterUrgentButton" onClick={() => setNotificationFilter(NotificationTypeFilters.URGENT)}>!!</button>
            <button className={css(styles["filterButton"])} id="filterDefaultButton" onClick={() => setNotificationFilter(NotificationTypeFilters.DEFAULT)}>💠</button>
            {listNotifications.size ?
              <ul>
                {listNotifications.map(notification => <NotificationItem key={notification.guid} id={notification.guid} {...notification} markAsRead={markNotificationAsRead} />)}
              </ul>
              : <></>
            }
            <button style={{ float: "right" }} className={css(styles["hideDrawerButton"]) + " hideDrawerButton"} aria-label={"Close"} onClick={handleHideDrawer}>
              <img className="close-icon" src="./close-icon.png" alt="close-icon" />
            </button>
          </div >
          :
          <div className={css(styles["all"], styles["menuItem"]) + " menuItem"} onClick={handleDisplayDrawer}>Your notifications</div>
        }
      </>
    );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: Seq(),
  handleDisplayDrawer: () => { console.log("handleDisplayDrawer: NOT IMPLEMENTED"); },
  handleHideDrawer: () => { console.log("handleHideDrawer: NOT IMPLEMENTED"); },
  markNotificationAsRead: () => { console.log("markNotificationAsRead: NOT IMPLEMENTED"); },
  setNotificationFilter: () => { console.log("setNotificationFilter: NOT IMPLEMENTED"); },
};

Notifications.displayName = "Notifications";

const translateKeyFrames = {
  '0%': {
    transform: "translateY(0px)"
  },
  '25%': {
    transform: "translateY(-5px)"
  },
  '50%': {
    transform: "translateY(0px)"
  },
  '75%': {
    transform: "translateY(-3px)"
  },
  '100%': {
    transform: "translateY(0px)"
  }
};

const opacityKeyFrames = {
  'from': {
    opacity: 0.5
  },
  'to': {
    opacity: 1
  }
};

const widthKeyFrames = {
  'from': {
    width: 0
  },
  'to': {
    width: "var(--notifications-width)"
  }
};

const styles = StyleSheet.create({
  "p": {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    backgroundClip: "padding-box",
    margin: 0,
    padding: "20px 0",
  },
  "all": {
    position: "absolute",
    right: "8px",
    backgroundColor: "white",
    backgroundClip: "padding-box",

    "--button-width": "15px",
    "--button-offset": "8px",
    "--menu-item-height": "2rem",
    "--menu-item-padding": "0.5rem",
    "--menu-item-margin-top": "0px",
    "--menu-item-margin-bottom": "0rem",
    "--menu-item-border-width": "0rem",

    "--notifications-padding": "0.8rem",
    "--notifications-border-width": "0.15rem",
    "--notifications-margin": "0rem",
    "--notifications-width": "550px",
  },
  "menuItem": {
    padding: "var(--menu-item-padding)",
    height: "var(--menu-item-height)",
    lineHeight: "var(--menu-item-height)",
    marginTop: "var(--menu-item-margin-top)",
    marginBottom: "var(--menu-item-margin-bottom)",
    borderWidth: "var(--menu-item-border-width)",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [translateKeyFrames, opacityKeyFrames],
      animationDuration: '0.5s, 0.5s',
      animationIterationCount: '3',
    }
  },
  "Notifications": {
    padding: "0 var(--notifications-padding)",
    border: "var(--notifications-border-width) dotted var(--color-primary)",
    margin: "var(--notifications-margin)",
    borderRadius: "0.4rem",
    width: "var(--notifications-width)",
    height: "400px",
    overflowY: "scroll",
    scrollbarWidth: "none",
    transition: "width 1.5s, height 1.5s",
    animationName: [widthKeyFrames],
    animationDuration: "1s",
    ":nth-child(1n) .close-icon": {
      width: "15px",
      height: "15px",
    },
    ":nth-child(1n) [data-notification-type*='default']": {
      color: "blue",
    },
    ":nth-child(1n) [data-notification-type*='urgent']": {
      color: "red",
    },
    ":nth-child(1n) ul": {
      padding: "0",
    },
    fontSize: "20px",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      maxHeight: "100%",
      "--notifications-width": "95%",
      height: "100%",
      right: "2px",
      alignSelf: "center",
    }
  },
  "hideDrawerButton": {
    display: "block",
    position: "sticky",
    bottom: "calc(100% - var(--button-width) - var(--notifications-padding) - var(--notifications-margin) - var(--notifications-border-width))",
  },
  "filterButton": {
    position: "sticky",
    top: "68px",
    padding: "0 6px",
    width: "40px",
    lineHeight: "20px",
    marginLeft: "0.1rem",
  }
});

