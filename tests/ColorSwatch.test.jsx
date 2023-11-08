import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import ColorSwatch from "../src/components/ColorSwatch";

describe("ColorSwatch", () => {
  it("displays the color value", () => {
    render(<ColorSwatch color="ffffff" unit="hex" />);
    const res = screen.queryByText(/ffffff/i);
    expect(res).not.toBeNull();
  });

  it("displays hex value if unit is hex", () => {
    render(<ColorSwatch color="ffffff" unit="hex" />);
    const res = screen.queryByText(/#/i);
    expect(res).not.toBeNull();
  });

  it("displays rgb value if unit is rgb", () => {
    render(<ColorSwatch color="ffffff" unit="rgb" />);
    const res = screen.queryByText(/rgb/i);
    expect(res).not.toBeNull();
  });

  it("displays hsl value if unit is hsl", () => {
    render(<ColorSwatch color="ffffff" unit="hsl" />);
    const res = screen.queryByText(/hsl/i);
    expect(res).not.toBeNull();
  });
});
