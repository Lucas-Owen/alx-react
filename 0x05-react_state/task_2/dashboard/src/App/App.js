import React from "react";
import PropTypes from "prop-types";

import Notifications from '../Notifications/Notifications';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from '../CourseList/CourseList';


import { StyleSheet, css } from "aphrodite";
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 }
];

const listNotifications = [
  { id: 1, type: "priority-default", value: "New course available" },
  { id: 2, type: "priority-urgent", value: "New resume available" },
  { id: 3, type: "priority-urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.keyPressed = this.keyPressed.bind(this);
    this.state = { displayDrawer:false };

    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
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
      <>
        <Notifications displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={listNotifications} />
        <div className={css(styles["App"])}>
          <Header />
          <div className={css(styles["App-body"])}>
            {
              this.state.isLoggedIn ?
                <BodySectionWithMarginBottom title={"Course list"}>
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
                :
                <BodySectionWithMarginBottom title={"Log in to continue"}>
                  <Login />
                </BodySectionWithMarginBottom>
            }
            <BodySection title={"News from the School"}>
              <p>Lorem ipsum dolor something something something</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
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

export default App;
