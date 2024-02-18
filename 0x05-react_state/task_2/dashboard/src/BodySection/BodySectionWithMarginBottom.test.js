import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("Test that BodySectionWithMarginBottom renders correctly", ()=>{
  it("should render a BodySection and pass its props to it", ()=>{
    const title = "Test title";
    const child = <p>This is the content of the child</p>;
    const wrapper = shallow(<BodySectionWithMarginBottom title={title}>{child}</BodySectionWithMarginBottom>);
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.length).toBeGreaterThan(0);
    expect(bodySection.props().title).toEqual(title);
    expect(bodySection.props().children).toEqual(child);
  })
})
