import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect } from "@jest/globals";
import BodySection from "./BodySection";

describe("Test that BodySection renders correctly", ()=>{
  it("should render one h2 and its children", ()=>{
    const child = <p>This text should display</p>;
    const title = "title";
    const wrapper = shallow(<BodySection title={title}>{child}</BodySection>);
    expect(wrapper.hasClass("bodySection")).toBeTruthy();
    expect(wrapper.contains(<h2>{title}</h2>)).toBeTruthy();
    expect(wrapper.contains(child)).toBeTruthy();
  })
})
