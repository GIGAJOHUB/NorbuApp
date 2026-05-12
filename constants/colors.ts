/**
 * Norbu Homes — Design System Colors
 * Extracted from the Material Design 3 dark theme used in the Stitch exports.
 */
export const Colors = {
  // Core surfaces
  background: "#16130f",
  surface: "#16130f",
  surfaceDim: "#16130f",
  surfaceBright: "#3c3933",
  surfaceTint: "#e3c282",
  surfaceContainer: "#221f1b",
  surfaceContainerLow: "#1e1b17",
  surfaceContainerHigh: "#2d2925",
  surfaceContainerHighest: "#38342f",
  surfaceContainerLowest: "#100e0a",
  surfaceVariant: "#38342f",

  // Primary (Gold)
  primary: "#e5c484",
  primaryContainer: "#c8a96b",
  primaryFixed: "#ffdea0",
  primaryFixedDim: "#e3c282",

  // Secondary
  secondary: "#e7c17c",
  secondaryContainer: "#5c4308",
  secondaryFixed: "#ffdea4",
  secondaryFixedDim: "#e7c17c",

  // Tertiary (Blue accent)
  tertiary: "#bac7f4",
  tertiaryContainer: "#9facd7",
  tertiaryFixed: "#dae1ff",
  tertiaryFixedDim: "#b8c5f2",

  // On-colors (text/icons)
  onSurface: "#e9e1da",
  onSurfaceVariant: "#d0c5b5",
  onBackground: "#e9e1da",
  onPrimary: "#402d00",
  onPrimaryContainer: "#533d09",
  onSecondary: "#412d00",
  onSecondaryContainer: "#d4b06d",
  onTertiary: "#222f53",
  onTertiaryContainer: "#334064",

  // Outline
  outline: "#998f81",
  outlineVariant: "#4d463a",

  // Error
  error: "#ffb4ab",
  errorContainer: "#93000a",
  onError: "#690005",
  onErrorContainer: "#ffdad6",

  // Inverse
  inverseSurface: "#e9e1da",
  inverseOnSurface: "#33302b",
  inversePrimary: "#735b25",

  // Utility
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",

  // Glassmorphism
  glassBackground: "rgba(34, 31, 27, 0.6)",
  glassBorder: "rgba(255, 255, 255, 0.05)",
  glassBorderHover: "rgba(229, 196, 132, 0.3)",
} as const;

export type ColorToken = keyof typeof Colors;
