import { useColors } from "./hooks/useColors";

// inline typing of props 
export default function Swatches({ click }: { click: boolean }) {
  const { colors, error, loading } = useColors(click);

  if (error !== "") {
    return <p>{error}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {colors.map((color, index) => {
        return <div key={index}>{`#${color}`}</div>;
      })}
    </>
  );
}
