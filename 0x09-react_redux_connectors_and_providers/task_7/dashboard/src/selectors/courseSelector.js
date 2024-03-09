import { Map } from "immutable";
import { course } from "../schema/courses";
export function getListCourses (state) { return Map(state.courses.getIn(["entities", course.key])).valueSeq(); }
