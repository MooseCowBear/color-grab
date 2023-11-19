import { useState, useEffect } from "react";

export const useColors = (dependency: boolean) => {
  const [colors, setColors] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const url = `https://www.colr.org/json/scheme/random?query&timestamp=${new Date().getTime()}`;
        const response = await fetch(url, {
          mode: "cors",
          signal: abortController.signal, 
        });
        if (response.status >= 400) {
          console.log(response.status);
          throw new Error("server error");
        }
        const data = await response.json();
        setColors(data.schemes[0].colors);
        setError("");
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error(err);
          setError("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    };
    getData();

    return () => {
      abortController.abort(); // cancel request if unmount
    };
  }, [dependency]);

  return { colors, error, loading };
};
