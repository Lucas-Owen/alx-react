import React from "react";
import { shallow } from "enzyme";
import { describe, it, expect, jest } from "@jest/globals";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("Test that WithLogging works correctly", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should call console.log on mount and unmount when argument is valid html", () => {
    const consoleSpy = jest.spyOn(console, "log");
    consoleSpy.mockImplementation();
    const HOC = WithLogging(() => <p></p>);
    const wrapper = shallow(<HOC />);
    wrapper.unmount();
    expect(consoleSpy).toBeCalledTimes(2);
  });
  it("should call console.log with the right message", () => {
    const consoleSpy = jest.spyOn(console, "log");
    consoleSpy.mockImplementation();
    const LoginHOC = WithLogging(Login);
    const wrapper = shallow(<LoginHOC />);
    expect(consoleSpy).toBeCalledWith(`Component ${Login.displayName} is mounted`);
    consoleSpy.mockReset();
    wrapper.unmount();
    expect(consoleSpy).toBeCalledWith(`Component ${Login.displayName} is going to unmount`);
  });
});
