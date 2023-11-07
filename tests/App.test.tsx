import { describe, it, expect } from "vitest";

describe("something truthy and something falsy", () => {
  it("is true", () => {
    expect(true).toBe(true);
  });
  it("is false", () => {
    expect(false).toBe(false);
  });
});
