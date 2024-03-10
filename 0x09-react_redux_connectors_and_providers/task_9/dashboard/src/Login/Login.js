import React from "react";

import { StyleSheet, css } from "aphrodite/no-important";

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit (event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  validateForm () {
    this.setState({ enableSubmit: Boolean(this.state.email && this.state.password) });
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value }, this.validateForm);
  }

  handleChangeEmail (event) {
    this.handleChange(event);
  }

  handleChangePassword (event) {
    this.handleChange(event);
  }

  render () {
    return (
      <>
        <form method="POST" className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          <p>Login to access the full dashboard</p>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChangeEmail} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChangePassword} />
          </div>
          <input id="submitButton" type="submit" value="OK" disabled={!this.state.enableSubmit} />
        </form>
      </>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    ":nth-child(1n) div": {
      display: "inline-block"
    },
    "@media (max-width: 900px)": {
      ":nth-child(1n) div, :nth-child(1n) #submitButton": {
        display: "block"
      },
    }
  },
});

Login.displayName = "Login";
