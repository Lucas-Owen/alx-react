import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { Seq } from "immutable";

import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import { fetchNotifications, markAsRead, setNotificationFilter } from "../actions/notificationActionCreators";
import Notifications from "./Notifications";

export class NotificationsContainer extends React.PureComponent {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchNotifications();
  }
  render () {
    return (
      <Notifications {...this.props} />
    );
  }
}


NotificationsContainer.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func
};

NotificationsContainer.defaultProps = {
  displayDrawer: false,
  listNotifications: Seq(),
  handleDisplayDrawer: () => { console.log("handleDisplayDrawer: NOT IMPLEMENTED"); },
  handleHideDrawer: () => { console.log("handleHideDrawer: NOT IMPLEMENTED"); },
  fetchNotifications: () => { console.log("fetchNotifications: NOT IMPLEMENTED"); },
  markNotificationAsRead: () => { console.log("markNotificationAsRead: NOT IMPLEMENTED"); },
  setNotificationFilter: () => { console.log("setNotificationFilter: NOT IMPLEMENTED"); },
};

NotificationsContainer.displayName = "NotificationsContainer";

export function mapStateToProps (state) {
  return {
  };
}

export const mapDispatchToProps = {
  fetchNotifications: fetchNotifications,
  markNotificationAsRead: markAsRead,
  setNotificationFilter: setNotificationFilter
};

function NotificationWithSelector (props) {
  const listNotifications = useSelector(getUnreadNotificationsByType);
  return (
    <NotificationsContainer {...props} listNotifications={listNotifications} />
  );
}

const ConnectedNotification = connect(mapStateToProps, mapDispatchToProps)(NotificationWithSelector);

export default ConnectedNotification;
