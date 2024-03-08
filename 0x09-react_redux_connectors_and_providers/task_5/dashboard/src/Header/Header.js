import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, css } from "aphrodite/no-important";
import { logout } from "../actions/uiActionCreators";

import { connect } from "react-redux";

class Header extends React.Component {
  render () {
    const { user, logout } = this.props;
    return (
      <div className={css(styles["App-header"]) + " App-header"}>
        {user.isLoggedIn && <section id="logoutSection" style={{ width: "92vw" }}>Welcome {user.email}(<a href="#" onClick={logout}>logout</a>)</section>}
        <img src="./assets/holberton-logo.jpg" className={css(styles["App-logo"])} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  "App-logo": {
    width: "200px",
    height: "auto",
  },
  "App-header": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    borderBottom: ["0.2rem", "solid", "var(--color-primary)"],
    color: "var(--color-primary)",
  },
});

Header.displayName = "Header";

export function mapStateToProps (state) {
  return { user: { ...state.ui.get("user"), isLoggedIn: state.ui.get("isUserLoggedIn") } };
}

export const mapDispatchToProps = {
  logout: logout
};

Header.propTypes = {
  user: PropTypes.shape({ isLoggedIn: PropTypes.bool }),
  logout: PropTypes.func
};

Header.defaultProps = {
  user: { isLoggedIn: false },
  logout: () => {}
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default ConnectedHeader;
export { Header };
