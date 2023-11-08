import { describe, it, expect } from "vitest";
import { convertToHSL, convertToRGB } from "../src/helpers/conversions.ts";

describe("convertToRGB", () => {
  it("converts a valid hex string to rgb without #", () => {
    expect(convertToRGB("0000FF")).toEqual({ r: 0, g: 0, b: 255 });
  });

  it("converts a valid hex string to rgb with #", () => {
    expect(convertToRGB("#0000FF")).toEqual({ r: 0, g: 0, b: 255 });
  });

  it("returns null if not given a hex string", () => {
    expect(convertToRGB("000")).toEqual(null);
  });
});

describe("convertToHSL", () => {
  it("converts a valid hex string to hsl", () => {
    expect(convertToHSL("0000FF")).toEqual({ h: 240, s: 100, l: 50 });
  });

  it("returns null if not given a hex string", () => {
    expect(convertToHSL("000")).toEqual(null);
  });
});
