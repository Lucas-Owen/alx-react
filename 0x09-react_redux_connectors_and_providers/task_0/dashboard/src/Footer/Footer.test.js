/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { describe, it, expect } from "@jest/globals";

import Footer from './Footer';

describe("Test that Footer renders without crashing", () => {
  const wrapper = mount(<Footer />);
  it("should render without crashing", () => {
    expect(wrapper.find("div.App-footer").length).toBe(1);
  });
  it("should render the text 'Copyright'", () => {
    expect(wrapper.html()).toContain("Copyright");
  });
});
