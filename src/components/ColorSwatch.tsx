import {
  displayHSL,
  displayHex,
  displayRGB,
} from "../helpers/colorSwatchHelpers";
import { convertToRGB, convertToHSL } from "../helpers/conversions";

// color is a hex string
export default function ColorSwatch({
  color,
  unit,
}: {
  color: string;
  unit: string;
}) {
  const displayColor = (color: string, unit: string) => {
    switch (unit) {
      case "hsl":
        return displayHSL(convertToHSL(color));
      case "rgb":
        return displayRGB(convertToRGB(color));
      default:
        return displayHex(color);
    }
  };
  return (
    <div className="swatch">
      <div
        className="color-sample"
        style={{ backgroundColor: `#${color}` }}
      ></div>
      <h2>{displayColor(color, unit)}</h2>
    </div>
  );
}
