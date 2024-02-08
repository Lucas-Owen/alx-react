import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {...props};
  }

  render () {
    const { type, html, value, id } = this.state
    return (
      <li id={id} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => this.state.markAsRead(id)}>{value}</li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number.isRequired
};

NotificationItem.defaultProps = {
  type:"default",
  html: undefined,
  value: undefined,
  markAsRead: () => {},
  id: 0
};

NotificationItem.displayName = "NotificationItem";

export default NotificationItem;
