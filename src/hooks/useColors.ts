import { useState, useEffect } from "react";

export const useColors = (dependency: boolean) => {
  const [colors, setColors] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("calling use effect in useColors");
    const getData = async () => {
      try {
        const url = `https://www.colr.org/json/scheme/random?query&timestamp=${new Date().getTime()}`;
        const response = await fetch(url, { mode: "cors" });
        if (response.status >= 400) {
          console.log(response.status);
          throw new Error("server error");
        }
        const data = await response.json();
        // console.log(data.schemes);
        // console.log(data.schemes[0]);
        // console.log(data.schemes[0].colors);
        setColors(data.schemes[0].colors);
        setError("");
      } catch (err) {
        console.log(err);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [dependency]);

  return { colors, error, loading };
};
