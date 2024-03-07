import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite/no-important";

class NotificationItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {...props};
  }

  render () {
    const { type, html, value, id } = this.state
    return (
      <li className={css(styles.notificationItem)} id={id} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => this.state.markAsRead(id)}>{value}</li>
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

const styles = StyleSheet.create({
  notificationItem: {
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px 8px",
    listStyleType: "none"
  }
})

export default NotificationItem;
