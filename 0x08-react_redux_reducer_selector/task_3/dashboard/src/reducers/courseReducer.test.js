import { describe, it, expect } from "@jest/globals";
import { courseReducer, initialState } from "./courseReducer";
import { fetchCourseSuccess, selectCourse, unSelectCourse } from "../actions/courseActionCreators";

const data = [
  {
    id: 1,
    name: "ES6",
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    credit: 20
  },
  {
    id: 3,
    name: "React",
    credit: 40
  }
];
const index = 2;
const fetchSuccessAction = fetchCourseSuccess(data);
const selectCourseAction = selectCourse(index);
const unSelectCourseAction = unSelectCourse(index);

describe("Test for courseReducer", () => {
  it("should return initialState when no action is passed", () => {
    expect(courseReducer()).toEqual(initialState);
  });
  it("should return the data passed if FETCH_COURSE_SUCCESS action is passed", () => {
    expect(courseReducer(initialState, fetchSuccessAction)).toMatchObject(data);
  });
  it("should return the right data with the correct item updated when SELECT_COURSE is passed", () => {
    expect(courseReducer(data, selectCourseAction).filter(course => course.id == index)).toMatchObject([{ id: index, isSelected: true }]);
  });
  it("should return the right data with the correct item updated when UNSELECT_COURSE is passed", () => {
    const selectedData = data.map(course => { return { ...course, isSelected: true }; });
    expect(courseReducer(selectedData, unSelectCourseAction).filter(course => course.id == index)).toMatchObject([{ id: index, isSelected: false }]);
  });
});
