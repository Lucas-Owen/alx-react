import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite/no-important";

const headerStyle = { backgroundColor: "#deb5b545" };
const rowStyle = { backgroundColor: "#f5f5f5ab" };
const rowChecked = { backgroundColor: "#e6e4e4" };

function CourseListRow (props) {
  const { isHeader, textFirstCell, textSecondCell, isChecked, onChangeRow, id} = props;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={headerStyle}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr style={headerStyle}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr className={isChecked ? css(styles["checked"]) : css(styles["normal"])}>
      <td><input type="checkbox" checked={isChecked} onChange={() => onChangeRow(id, !isChecked)} />{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "", 
  textSecondCell: null
};

CourseListRow.displayName = "CourseListRow";

const styles = StyleSheet.create({
  "normal": {
    ...rowStyle
  },
  "checked": {
    ...rowChecked
  }
});

export default CourseListRow;
