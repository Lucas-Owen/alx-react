import { describe, it, expect } from '@jest/globals';
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe("Test for courseActionCreators", () => {
  it("should return an object with the correct type and index attribute", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
