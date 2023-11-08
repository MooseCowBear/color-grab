import { vi, describe, it, expect, Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Swatches from "../src/components/Swatches";
import { useColors } from "../src/hooks/useColors";

const mockColorSwatch = vi.fn();
vi.mock("../src/components/ColorSwatch", () => ({
  default: (props) => {
    mockColorSwatch(props);
    return <div>Color Swatch Mock</div>;
  },
}));

vi.mock("../src/hooks/useColors", () => {
  return {
    useColors: vi.fn(),
  };
});

describe("Swatches", () => {
  it("displays a loading message if loading", () => {
    (useColors as Mock).mockReturnValue({
      loading: true,
      error: "",
      colors: [],
    });

    render(<Swatches click={false} unit="hex" />);
    const res = screen.queryByText(/loading/i);
    expect(res).not.toBeNull();
  })

  it("displays an error message if error", () => {
    (useColors as Mock).mockReturnValue({
      loading: false,
      error: "Something went wrong.",
      colors: [],
    });
    render(<Swatches click={false} unit="hex" />);
    const res = screen.queryByText(/wrong/i);
    expect(res).not.toBeNull();
  })

  it("displays a color swatch for every color", () => {
    (useColors as Mock).mockReturnValue({
      loading: false,
      error: "",
      colors: ["ffffff", "E23CE2"],
    });

    render(<Swatches click={false} unit="hex" />);
    const res = screen.queryAllByText(/mock/i);
    expect(res.length).toBe(2);
  })
})