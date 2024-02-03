import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("Test that CourseList renders without crashing", ()=>{
  it("should render a table with five rows", ()=>{
    const wrapper = shallow(<CourseList />)
    expect(wrapper.getElement().type).toEqual("table");
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  })
})
