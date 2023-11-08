interface RGB {
  r: number;
  b: number;
  g: number;
}

export const displayRGB = (rgb: RGB) => {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.g})`;
};

interface HSL {
  h: number;
  s: number;
  l: number;
}

export const displayHSL = (hsl: HSL) => {
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
};

export const displayHex = (hex: string) => {
  return `#${hex}`;
}