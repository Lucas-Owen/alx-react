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
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "../actions/uiActionCreators";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.keyPressed = this.keyPressed.bind(this);
    this.state = {
      listNotifications: [...props.listNotifications]
    };

    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead (id) {
    this.setState({ listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id) });
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
      <AppContext.Provider value={{ user: this.props.user }}>
        <Notifications displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
          listNotifications={this.state.listNotifications}
          markNotificationAsRead={this.markNotificationAsRead} />
        <div className={css(styles["App"])}>
          <Header />
          <div className={css(styles["App-body"])}>
            {
              this.props.isLoggedIn ?
                <BodySectionWithMarginBottom title={"Course list"}>
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
                :
                <BodySectionWithMarginBottom title={"Log in to continue"}>
                  <Login logIn={this.props.login} />
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
  listNotifications: PropTypes.array,
  displayDrawer: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func
};

App.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  isLoggedIn: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
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
  return {
    isLoggedIn: state.ui.get("isUserLoggedIn"),
    displayDrawer: state.ui.get("isNotificationDrawerVisible")
  };
}

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;
export { App };
