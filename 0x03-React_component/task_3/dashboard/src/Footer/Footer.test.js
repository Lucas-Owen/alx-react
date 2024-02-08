import React from 'react';
import { shallow } from 'enzyme';
import { describe, it, expect } from "@jest/globals";

import Footer from './Footer';

describe("Test that Footer renders without crashing", () => {
  const wrapper = shallow(<Footer />);
  it("should render without crashing", () => {
    expect(wrapper.hasClass("App-footer")).toBeTruthy();
  });
  it("should render the text 'Copyright'", () => {
    expect(wrapper.html()).toContain("Copyright");
  });
});
