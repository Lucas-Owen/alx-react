import { describe, it, expect } from '@jest/globals';
import { fetchCourseLoading, fetchCourseSuccess, fetchCourses, selectCourse, unSelectCourse } from './courseActionCreators';
import { FETCH_COURSE_LOADING, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('node-fetch');
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Test for courseActionCreators", () => {
  it("should return an object with the correct type and index attribute", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});

describe("Test that fetchCourses works as expected", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should dispatch FETCH_COURSE_LOADING with true", () => {
    const store = mockStore({});
    fetchMock.get("/courses.json", { status: 403, body: [] });
    return store.dispatch(fetchCourses())
      .then(() => {
        const actionsReceived = store.getActions();
        expect(actionsReceived).toEqual([fetchCourseLoading(true), fetchCourseSuccess([]), fetchCourseLoading(false)]);
      });
  });
});
