import { describe, it, expect } from "@jest/globals";
import { Map, List } from "immutable";
import courseNormalizer, { course } from "../schema/courses";
import { getListCourses } from "./courseSelector";
const data = [
  {
    "id": "1",
    "name": "ES6",
    "credit": 60
  },
  {
    "id": "2",
    "name": "Webpack",
    "credit": 20
  },
  {
    "id": "3",
    "name": "React",
    "credit": 40
  }
];

describe("Test that getListCourses works properly", () => {
  it("should return all entities", () => {
    const courses = Map(courseNormalizer(data));
    const state = { courses };
    const result = getListCourses(state);
    expect(result.toJS()).toEqual(data);
  });
});
