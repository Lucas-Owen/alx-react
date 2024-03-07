import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";
import CourseList from "./CourseList";


describe("Test that CourseList renders without crashing", () => {
  it("should render a table with two header rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.getElement().type).toEqual("table");
    expect(wrapper.find("thead").children()).toHaveLength(2);
  });
  it("should render no courses when listCourses is empty", ()=>{
    const listCourses = [];
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find("tbody").children()).toHaveLength(0);
  })
  it("should render the correct number of rows as courses in the listCourses", ()=>{
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find("tbody").children()).toHaveLength(listCourses.length);
  })
});
