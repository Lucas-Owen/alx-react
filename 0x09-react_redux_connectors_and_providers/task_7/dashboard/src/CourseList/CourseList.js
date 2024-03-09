import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";

import { StyleSheet, css } from "aphrodite/no-important";
import { fetchCourses, selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { getListCourses } from "../selectors/courseSelector";
import { Seq } from "immutable";

export class CourseList extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchCourses();
  }
  render () {
    const { listCourses, selectCourse, unselectCourse } = this.props;
    const onChangeRow = (id, selected) => { selected ? selectCourse(id) : unselectCourse(id); };
    return (
      <table id="CourseList" className={css(styles.courseList)}>
        <thead>
          <CourseListRow textFirstCell={"Available courses"} isHeader={true} />
          <CourseListRow textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader={true} />
        </thead>
        <tbody>
          {listCourses.map(course => <CourseListRow key={course.id} id={course.id} isChecked={course.isSelected} onChangeRow={onChangeRow} textFirstCell={course.name} textSecondCell={course.credit} />)}
        </tbody>
      </table>
    );
  }
}

function CourseListWithSelector (props) {
  const listCourses = useSelector(getListCourses, (a, b) => a.equals(b));
  return (
    <CourseList {...props} listCourses={listCourses} />
  );
}

export function mapStateToProps (state) {
  return {};
}
export const mapDispatchToProps = {
  fetchCourses: fetchCourses,
  selectCourse: selectCourse,
  unselectCourse: unSelectCourse
};

const ConnectedCourseList = connect(mapStateToProps, mapDispatchToProps)(CourseListWithSelector);
export default ConnectedCourseList;

CourseList.propTypes = {
  listCourses: PropTypes.object
};

CourseList.defaultProps = {
  listCourses: Seq(),
  fetchCourses: () => {}
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
