import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../src/App";

const mockSwatches = vi.fn();
vi.mock("../src/components/Swatches", () => ({
  default: (props) => {
    mockSwatches(props);
    return <div>Swatches Mock</div>;
  },
}));

describe("App", () => {
  it("has a button to retrieve a new color scheme", () => {
    render(<App />);
    const btn = screen.queryByRole("button", { name: /new colors/i });
    expect(btn).not.toBeNull();
  });

  it("calls Swatches component", () => {
    render(<App />);
    const s = screen.queryByText(/swatches mock/i);
    expect(s).not.toBeNull();
  })

  it("has a button to switch color unit", () => {
    render(<App />);
    const btn = screen.queryByRole("button", { name: /switch to/i });
    expect(btn).not.toBeNull();
  });

  it("color unit button defaults to next unit being rgb", () => {
    render(<App />);
    const btn = screen.queryByRole("button", { name: /rgb/i });
    expect(btn).not.toBeNull();
  });

  it("changes next color unit to hsl if clicked once", async () => {
    const user = userEvent.setup();
    render(<App />);

    const btn = screen.getByRole("button", { name: /switch to/i });
    await user.click(btn);

    expect(screen.queryByText(/hsl/i));
  });

  it("changes next color unit to hex if clicked twice", async () => {
    const user = userEvent.setup();
    render(<App />);

    const btn = screen.getByRole("button", { name: /switch to/i });
    await user.click(btn);
    await user.click(btn);

    expect(screen.queryByText(/hex/i));
  });
});
