import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";

import "./CourseList.css";

export default function CourseList ({ listCourses=[] }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell={"Available courses"} isHeader={true} />
        <CourseListRow textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader={true} />
      </thead>
      <tbody>
        {listCourses.map(course => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />)}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};
