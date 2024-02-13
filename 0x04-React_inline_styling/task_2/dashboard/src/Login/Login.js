import React from "react";

import { StyleSheet, css } from "aphrodite";

export default class Login extends React.Component {
  render () {
    return (
      <>
        <form method="POST" className={css(styles.form)}>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button>OK</button>
        </form>
      </>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    ":nth-child(1n) p": {
      marginLeft: "2.1rem"
    }
  }
});

Login.displayName = "Login";
