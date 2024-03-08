import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

import { connect } from "react-redux";

export function Footer (props) {
  return (
    <div className="App-footer">
      {props.user.isLoggedIn && <p>Contact us</p>}
      Copyright {getFullYear()} - {getFooterCopy()}
    </div>
  );
}
export function mapStateToProps (state) {
  return { user: { ...state.get("user"), isLoggedIn: state.get("isUserLoggedIn") } };
}

Footer.propTypes = {
  user: PropTypes.shape({ isLoggedIn: PropTypes.bool })
};

Footer.defaultProps = {
  user: { isLoggedIn: false }
};

Footer.displayName = "Footer";

const ConnectedFooter = connect(mapStateToProps)(Footer);
export default ConnectedFooter;
