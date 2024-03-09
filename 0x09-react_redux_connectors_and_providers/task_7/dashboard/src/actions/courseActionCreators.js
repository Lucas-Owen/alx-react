import fetch from "node-fetch";
import { FETCH_COURSE_LOADING, FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse (index) {
  return { type: SELECT_COURSE, index };
}
export function unSelectCourse (index) {
  return { type: UNSELECT_COURSE, index };
}
export function fetchCourseSuccess (data) {
  return { type: FETCH_COURSE_SUCCESS, data };
}
export function fetchCourseLoading (loading) {
  return { type: FETCH_COURSE_LOADING, loading };
}

export function fetchCourses () {
  return async (dispatch) => {
    dispatch(fetchCourseLoading(true));
    await fetch("/courses.json").then((async response => {
      const data = await response.json();
      dispatch(fetchCourseSuccess(data));
    })).catch(err => {
      console.log(`Error fetching courses: ${err}`);
    });
    dispatch(fetchCourseLoading(false));
  };
}

export const boundSelectCourse = (index) => dispatch => dispatch(selectCourse(index));

export const boundUnSelectCourse = (index) => dispatch => dispatch(unSelectCourse(index));
