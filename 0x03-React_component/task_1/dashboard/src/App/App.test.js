import React from "react";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

import { shallow } from "enzyme";
import { it, describe, expect, jest } from "@jest/globals";
import CourseList from "../CourseList/CourseList";

describe("Test that App renders without crashing", function () {
  const wrapper = shallow(<App />);
  it("should contain the Notifications component", function () {
    expect(wrapper.containsMatchingElement(<Notifications />)).toBeTruthy();
  });
  it("should contain the Header component", function () {
    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it("should contain the Login component", function () {
    expect(wrapper.containsMatchingElement(<Login />)).toBeTruthy();
  });

  it("should contain the Footer component", function () {
    expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
  });
  it("should not contain the CourseList component", function () {
    expect(wrapper.containsMatchingElement(<CourseList />)).toBeFalsy();
  });
  it("should respond to ctrl + h", ()=>{
    const event = new KeyboardEvent("keydown", {key: "h", ctrlKey: true});
    
  })
});

