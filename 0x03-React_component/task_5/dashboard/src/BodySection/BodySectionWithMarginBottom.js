import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    )
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}

BodySectionWithMarginBottom.displayName = "BodySectionWithMarginBottom";

export default BodySectionWithMarginBottom;
