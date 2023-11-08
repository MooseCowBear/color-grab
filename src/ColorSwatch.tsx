import { displayHex } from "./helpers/colorSwatchHelpers";

// color is a hex string
export default function ColorSwatch({ color }: { color: string }) {
  return (
    <div className="swatch">
      <div
        className="color-sample"
        style={{ backgroundColor: `#${color}` }}
      ></div>
      <h2>{displayHex(color)}</h2>
    </div>
  );
}
