interface RGB {
  r: number;
  b: number;
  g: number;
}

export const displayRGB = (rgb: RGB | null) => {
  if (rgb) {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.g})`;
  }
  return null;
};

interface HSL {
  h: number;
  s: number;
  l: number;
}

export const displayHSL = (hsl: HSL | null) => {
  if (hsl) {
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  }
  return null;
};

export const displayHex = (hex: string) => {
  return `#${hex}`;
};
