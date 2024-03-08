import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from "immutable";
import courseNormalizer, { course } from "../schema/courses";

export const initialState = Map();

export function courseReducer (state = initialState, action) {
  if (!action) return state;
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedCourses = courseNormalizer(action.data);
      return state.merge(Map(normalizedCourses).withMutations(map => {
        normalizedCourses.result.forEach(id => map.setIn(["entities", course.key, id, "isSelected"], false));
        return map;
      }));
    case SELECT_COURSE:
      return state.setIn(["entities", course.key, action.index, "isSelected"], true);
    case UNSELECT_COURSE:
      return state.setIn(["entities", course.key, action.index, "isSelected"], false);
    default: return state;
  }
}
