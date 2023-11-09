import { vi, describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useColors } from "../src/hooks/useColors";

describe("useColors", () => {
  it("should return the initial values for loading, error, colors", async () => {
    vi.spyOn(window, "fetch");
    const res = renderHook(() => useColors(false));
    const { colors, error, loading } = res.result.current;
    expect(colors).toEqual([]);
    expect(error).toEqual("");
    expect(loading).toBeTruthy();
  });

  it("should return data when completes successfully", async () => {
    const mockData = { schemes: [{ colors: ["ffffff", "aaaaaa"] }] };

    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      console.log("i am the mock");
      return Promise.resolve({
        json: () => Promise.resolve(mockData),
      } as Response);
    });

    const res = renderHook(() => useColors(false));
    await waitFor(() => {
      expect(res.result.current).toEqual({
        colors: ["ffffff", "aaaaaa"],
        error: "",
        loading: false,
      });
    });
  });

  it("should return an error when completes unsuccessfully", async () => {
    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      console.log("i am the mock");
      return Promise.reject(new Error("Async error"));
    });
    const res = renderHook(() => useColors(false));
    await waitFor(() => {
      expect(res.result.current).toEqual({
        colors: [],
        error: "Something went wrong.",
        loading: false,
      });
    });
  });

  it("should abort fetch if component unmounts", async () => {
    const abortSpy = vi.spyOn(AbortController.prototype, "abort");
    const { unmount } = renderHook(() => useColors(false));
    unmount();

    expect(abortSpy).toHaveBeenCalled();
  })
});
