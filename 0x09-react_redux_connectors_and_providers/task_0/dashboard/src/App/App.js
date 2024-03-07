import React from "react";
import PropTypes from "prop-types";

import Notifications from '../Notifications/Notifications';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from '../CourseList/CourseList';

import AppContext, { defautlLogOut, defaultUser } from "./AppContext";


import { StyleSheet, css } from "aphrodite";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { listCourses } from "../utils/utils";

import { connect } from "react-redux";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.keyPressed = this.keyPressed.bind(this);
    this.state = {
      displayDrawer: false,
      user: { ...defaultUser },
      logOut: this.logOut,
      listNotifications: [...props.listNotifications]
    };

    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead (id) {
    this.setState({ listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id) });
  }

  logIn (email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  logOut () {
    this.setState({ user: { email: "", password: "" } });
  }

  handleHideDrawer () {
    this.setState({ displayDrawer: false });
  }

  handleDisplayDrawer () {
    this.setState({ displayDrawer: true });
  }

  keyPressed (e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      e.stopPropagation();
      alert("Logging you out");
      this.props.logOut();
    }
  }
  componentDidMount () {
    document.addEventListener("keydown", this.keyPressed);
  }
  componentWillUnmount () {
    document.removeEventListener("keydown", this.keyPressed);
  }
  render () {
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
        <Notifications displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={this.state.listNotifications}
          markNotificationAsRead={this.markNotificationAsRead} />
        <div className={css(styles["App"])}>
          <Header />
          <div className={css(styles["App-body"])}>
            {
              this.state.user.isLoggedIn ?
                <BodySectionWithMarginBottom title={"Course list"}>
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
                :
                <BodySectionWithMarginBottom title={"Log in to continue"}>
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
            }
            <BodySection title={"News from the School"}>
              <p>Lorem ipsum dolor something something something</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  listNotifications: PropTypes.array
};

App.defaultProps = {
  listNotifications: [],
  logOut: () => {}
};

App.displayName = "App";

const styles = StyleSheet.create({
  "App": {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  "App-body": {
    flexGrow: 1,
    marginLeft: "2.1rem"
  }
});

export function mapStateToProps (state) {
  return { isLoggedIn: state.get("isUserLoggedIn") };
}

export const connectedApp = connect(mapStateToProps)(App);

export default App;
