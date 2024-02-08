import React from "react";
import PropTypes from "prop-types";

import "./Notifications.css";

import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.state = { ...props };
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.listNotifications.length > this.state.listNotifications.length);
  }
  
  render () {

    const {displayDrawer, listNotifications} = this.state;

    return (
      <>
        <div className="menuItem">Your notifications</div>
        {displayDrawer ?
          <div className="Notifications">
            {listNotifications.length ?
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map(notification => <NotificationItem key={notification.id} id={notification.id} {...notification} markAsRead={this.markAsRead}/>)}
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

export default Notifications;
