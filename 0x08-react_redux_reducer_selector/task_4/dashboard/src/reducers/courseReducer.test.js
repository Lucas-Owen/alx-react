import { describe, it, expect } from "@jest/globals";
import { courseReducer, initialState } from "./courseReducer";
import { fetchCourseSuccess, selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { denormalize } from "normalizr";
import { course } from "../schema/courses";

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
    const state = courseReducer(initialState, fetchSuccessAction);
    const result = denormalize(state.get("result"), [course], state.get("entities"));
    expect(result).toMatchObject(data);
  });
  it("should return the right data with the correct item updated when SELECT_COURSE is passed", () => {
    const state = courseReducer(initialState, fetchSuccessAction);
    const nextState = courseReducer(state, selectCourseAction);
    const result = nextState.getIn(["entities", course.key, index]);
    expect(result).toMatchObject({ id: index, isSelected: true });
  });
  it("should return the right data with the correct item updated when UNSELECT_COURSE is passed", () => {
    const state = courseReducer(initialState, fetchSuccessAction);
    const nextState = courseReducer(state, unSelectCourseAction);
    const result = nextState.getIn(["entities", course.key, index]);
    expect(result).toMatchObject({ id: index, isSelected: false });
  });
});
