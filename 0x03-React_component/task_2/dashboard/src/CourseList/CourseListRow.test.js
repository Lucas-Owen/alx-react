import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";

import CourseListRow from "./CourseListRow";

describe("Test that CourseListRow renders properly when isHeader=True", () => {
  it("should render one row with a 'th' tag with colspan=2 when textSecondCell does not exist", () => {
    const props = {
      isHeader: true,
      textFirstCell: "Test Props"
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.getElement().type).toEqual("tr")
    expect(wrapper.find(`tr`)).toHaveLength(1);
    expect(wrapper.find(`th`)).toHaveLength(1);
    expect(wrapper.find(`th[colspan=2]`)).toHaveLength(1);
  });
  it("should render a row with two 'th' cells when textSecondCell exists", () => {
    const props = {
      isHeader: true,
      textFirstCell: "Test Props",
      textSecondCell: "Default Props"
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.getElement().type).toEqual("tr")
    expect(wrapper.find(`tr`)).toHaveLength(1);
    expect(wrapper.find(`th`)).toHaveLength(2);
  });
});

describe("Test that CourseListRow renders properly when isHeader=false", ()=>{
  it("should render a row with two 'td' elements within a 'tr' element", ()=>{
    const props = {
      textFirstCell: "Header 1",
      textSecondCell: "Header 2"
    }
    const wrapper = shallow(<CourseListRow {...props}/>);
    expect(wrapper.getElement().type).toEqual("tr")
    expect(wrapper.find("tr")).toHaveLength(1);
    expect(wrapper.find("td")).toHaveLength(2);
    expect(wrapper.children()).toHaveLength(2);
  })
})
