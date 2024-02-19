import React from "react";

import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends React.Component {
  render () {
    let {user, logOut} = this.context;
    if (!user)
      user = {};
    if (!logOut)
      logOut = ()=>{};
    return (
      <div className={css(styles["App-header"]) + " App-header"}>
        { user.isLoggedIn && <section id="logoutSection">Welcome {user.email}(<a href="#" onClick={logOut}>logout</a>)</section>}
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
    borderBottom: ["0.2rem", "solid", "var(--color-primary)"],
    color: "var(--color-primary)",
  },
});

Header.displayName = "Header";

Header.contextType = AppContext;

export default Header;
