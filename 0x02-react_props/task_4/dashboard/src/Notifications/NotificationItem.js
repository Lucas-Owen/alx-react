import React from "react";
import PropTypes from "prop-types";

function NotificationItem ({ type="default", html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({__html: PropTypes.string.isRequired}),
  value: PropTypes.string
}

export default NotificationItem;
