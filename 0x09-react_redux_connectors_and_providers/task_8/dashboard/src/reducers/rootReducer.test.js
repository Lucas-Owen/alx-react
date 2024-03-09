import { describe, it, expect } from "@jest/globals";
import rootReducer from "./rootReducer";
import Immutable from "immutable";

describe("Test that rootReducer works as expected", () => {
  it("should return the correct object as a default state", () => {
    const state = rootReducer();
    expect(state).toHaveProperty("courses");
    expect(state).toHaveProperty("notifications");
    expect(state).toHaveProperty("ui");
    for (let key in state) {
      expect(state[key]).toBeInstanceOf(Immutable.Map)
    }
  });
});
