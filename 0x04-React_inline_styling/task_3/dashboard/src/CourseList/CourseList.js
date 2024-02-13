import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";

import { StyleSheet, css } from "aphrodite";

export default function CourseList ({ listCourses = [] }) {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
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

CourseList.displayName = "CourseList";

const styles = StyleSheet.create({
  courseList: {
    "--course-list-table-border": ["2px", "solid", "rgba(200, 200, 200, 0.5)"],

    width: "100%",
    border: "var(--course-list-table-border)",
    borderRadius: "5px",
    marginTop: "0.5rem",
    borderCollapse: "separate",
    ":nth-child(1n) tr:not(:first-child)": {
      textAlign: "left",
      fontSize: "0.9rem",
    },
    ":nth-child(1n) th, :nth-child(1n) td": {
      padding: "0.25rem",
    },
    ":nth-child(1n) thead th": {
      borderBottom: "var(--course-list-table-border)",
    },
  },
});

css(styles.globals);
