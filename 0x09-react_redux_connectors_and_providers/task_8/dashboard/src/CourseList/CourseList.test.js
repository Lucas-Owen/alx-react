import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect, jest } from "@jest/globals";
import { CourseList } from "./CourseList";
import CourseListRow from "./CourseListRow";
import { Seq } from "immutable";
import { listCourses } from "../utils/utils";


describe("Test that CourseList renders without crashing", () => {
  it("should render a table with two header rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.getElement().type).toEqual("table");
    expect(wrapper.find("thead").children()).toHaveLength(2);
  });
  it("should render no courses when listCourses is empty", () => {
    const listCourses = Seq();
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find("tbody").children()).toHaveLength(0);
  });
  it("should render the correct number of rows as courses in the listCourses", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const wrapper = shallow(<CourseList listCourses={Seq(listCourses)} />);
    expect(wrapper.find("tbody").children()).toHaveLength(listCourses.length);
  });
});

describe("Test that actions are dispatched correctly", () => {
  it("should disipatch fetchCourses when component mounts", () => {
    const fetchCourses = jest.fn();
    shallow(<CourseList fetchCourses={fetchCourses} listCourses={Seq(listCourses)} />);
    expect(fetchCourses).toBeCalled();
  });
  it("should dispatch selectCourse/unSelectCourse when a row is selected/unselected", () => {
    const selectCourse = jest.fn();
    const unSelectCourse = jest.fn();
    const wrapper = shallow(<CourseList unselectCourse={unSelectCourse} selectCourse={selectCourse} listCourses={Seq(listCourses)} />);
    const row = wrapper.find(CourseListRow).get(3);
    row.props.onChangeRow(row.props.id, false);
    row.props.onChangeRow(row.props.id, true);
    expect(unSelectCourse).toBeCalled();
    expect(selectCourse).toBeCalled();
  });
});
