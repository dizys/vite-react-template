import Color from 'color';
import _styled, {ThemedStyledInterface} from 'styled-components';

export type LightnessModifier = (lightness?: number, alpha?: number) => string;

export interface StyledTheme {
  light: string;
  lightMod: LightnessModifier;
  dark: string;
  darkMod: LightnessModifier;
  gray: string;
  grayMod: LightnessModifier;
  accent: string;
  accentMod: LightnessModifier;
  darkAccent: string;
  darkAccentMode: LightnessModifier;
  yellow: string;
  yellowMod: LightnessModifier;
  orange: string;
  orangeMod: LightnessModifier;
  red: string;
  redMod: LightnessModifier;
  green: string;
  greenMod: LightnessModifier;
  blue: string;
  blueMod: LightnessModifier;
  text: {
    navPrimary: string;
    navRegular: string;
    navSecondary: string;
    navPlaceholder: string;
    primary: string;
    regular: string;
    secondary: string;
    placeholder: string;
  };
  border: {
    base: string;
    light: string;
    lighter: string;
    extraLight: string;
  };
  sizes: {
    headerHeight: number;
  };
}

const light = '#fff';
const dark = '#000';

const lightColor = new Color(light);
const darkColor = new Color(dark);

export function createLightnessModifier(
  color: Color | string,
): LightnessModifier {
  return (lightness = 0, alpha = 1): string => {
    if (typeof color === 'string') {
      color = new Color(color);
    }

    const modified =
      lightness >= 0
        ? color.mix(lightColor, lightness)
        : color.mix(darkColor, -lightness);

    if (alpha === 1) {
      return modified.hex();
    } else {
      const red = modified.red();
      const green = modified.green();
      const blue = modified.blue();

      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
  };
}

export const styled = _styled as unknown as ThemedStyledInterface<StyledTheme>;

const gray = '#909399';
const accent = '#1890ff';
const darkAccent = '#096dd9';
const yellow = '#fadb14';
const orange = '#fa8c16';
const red = '#f56c6c';
const green = '#9fe15d';
const blue = '#6cd3e8';

export const theme: StyledTheme = {
  light,
  lightMod: createLightnessModifier(light),
  dark,
  darkMod: createLightnessModifier(dark),
  gray,
  grayMod: createLightnessModifier(gray),
  accent,
  accentMod: createLightnessModifier(accent),
  darkAccent,
  darkAccentMode: createLightnessModifier(darkAccent),
  yellow,
  yellowMod: createLightnessModifier(yellow),
  orange,
  orangeMod: createLightnessModifier(orange),
  red,
  redMod: createLightnessModifier(red),
  green,
  greenMod: createLightnessModifier(green),
  blue,
  blueMod: createLightnessModifier(blue),
  text: {
    navPrimary: '#333',
    navRegular: '#444',
    navSecondary: '#999',
    navPlaceholder: '#888',
    primary: '#303133',
    regular: '#5e6d82',
    secondary: '#909399',
    placeholder: '#C0C4CC',
  },
  border: {
    base: '#dcdfe6',
    light: '#e4e7ed',
    lighter: '#ebfef5',
    extraLight: '#f2f6fc',
  },
  sizes: {
    headerHeight: 50,
  },
};
