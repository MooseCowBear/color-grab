import ColorSwatch from "./ColorSwatch";
import { useColors } from "./hooks/useColors";

// inline typing of props
export default function Swatches({ click, unit }: { click: boolean, unit: string }) {
  const { colors, error, loading } = useColors(click);

  if (error !== "") {
    return <p>{error}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="swatch-container">
      {colors.map((color, index) => {
        return <ColorSwatch key={index} color={color} unit={unit} />;
      })}
    </div>
  );
}
