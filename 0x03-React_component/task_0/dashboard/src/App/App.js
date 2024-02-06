import './App.css';
import React from "react";
import PropTypes from "prop-types";

import Notifications from '../Notifications/Notifications';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from '../CourseList/CourseList';

import { getLatestNotification } from '../utils/utils';

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
    this.state = { ...props}; // Browser warning when assigning directly
  }
  render () {
    return (
      <>
        <Notifications displayDrawerlistNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            {this.state.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
