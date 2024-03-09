import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite/no-important";
import { Map, Seq } from "immutable";

import NotificationItem from "./NotificationItem";
import { fetchNotifications } from "../actions/notificationActionCreators";

export class Notifications extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchNotifications();
  }

  render () {

    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        <div className={css(styles["all"], styles["menuItem"]) + " menuItem"} onClick={handleDisplayDrawer}>Your notifications</div>
        {displayDrawer ?
          <div className={css(styles["all"], styles["Notifications"]) + " Notifications"}>
            {listNotifications.size ?
              <>
                <p className={css(styles["p"])}>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map(notification => <NotificationItem key={notification.guid} id={notification.guid} {...notification} markAsRead={this.props.markNotificationAsRead} />)}
                </ul>
              </>
              :
              <p>No new notification for now</p>
            }
            <button style={{ float: "right" }} aria-label={"Close"} onClick={handleHideDrawer}>
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
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: Seq(),
  handleDisplayDrawer: () => { console.log("handleDisplayDrawer: NOT IMPLEMENTED"); },
  handleHideDrawer: () => { console.log("handleHideDrawer: NOT IMPLEMENTED"); },
  fetchNotifications: () => { console.log("fetchNotifications: NOT IMPLEMENTED"); }
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
    maxWidth: "500px",
    overflowY: "scroll",
    maxHeight: "500px",
    ":nth-child(1n) button": {
      position: "sticky",
      bottom: "calc(100% - var(--button-width) - var(--notifications-padding) - var(--notifications-margin) - var(--notifications-border-width))",
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
    },
    ":nth-child(1n) ul": {
      padding: "0",
    },
    fontSize: "20px",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      width: "95%",
      right: "auto",
      alignSelf: "center",
      height: "95%",
    }
  }
});

export function mapStateToProps (state) {
  return {
    listNotifications: Map(state.notifications.getIn(["notifications", "entities", "messages"])).valueSeq()
  };
}

export const mapDispatchToProps = {
  fetchNotifications: fetchNotifications
};

const ConnectedNotification = connect(mapStateToProps, mapDispatchToProps)(Notifications);

export default ConnectedNotification;
