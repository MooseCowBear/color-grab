import { describe, it, expect } from "vitest";
import {
  displayHSL,
  displayHex,
  displayRGB,
} from "../src/helpers/colorSwatchHelpers.ts";

describe("displayRGB", () => {
  it("returns expected string representation of rgb", () => {
    expect(displayRGB({ r: 255, g: 255, b: 255 })).toBe("rgb(255, 255, 255)");
  });
});

describe("displayHSL", () => {
  it("returns expected string representation of hsl", () => {
    expect(displayHSL({ h: 0, s: 0, l: 96.1 })).toBe("hsl(0, 0%, 96.1%)");
  });
});

describe("displayHex", () => {
  it("returns expected string representation of hex", () => {
    expect(displayHex("0000FF")).toBe("#0000FF");
  });
});
