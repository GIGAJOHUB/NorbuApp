/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core surfaces
        background: "#16130f",
        surface: {
          DEFAULT: "#16130f",
          dim: "#16130f",
          bright: "#3c3933",
          tint: "#e3c282",
          container: {
            DEFAULT: "#221f1b",
            low: "#1e1b17",
            high: "#2d2925",
            highest: "#38342f",
            lowest: "#100e0a",
          },
          variant: "#38342f",
        },
        // Primary / Gold
        primary: {
          DEFAULT: "#e5c484",
          container: "#c8a96b",
          fixed: {
            DEFAULT: "#ffdea0",
            dim: "#e3c282",
          },
        },
        // Secondary
        secondary: {
          DEFAULT: "#e7c17c",
          container: "#5c4308",
          fixed: {
            DEFAULT: "#ffdea4",
            dim: "#e7c17c",
          },
        },
        // Tertiary
        tertiary: {
          DEFAULT: "#bac7f4",
          container: "#9facd7",
          fixed: {
            DEFAULT: "#dae1ff",
            dim: "#b8c5f2",
          },
        },
        // On-colors (text/icons on surfaces)
        "on-surface": {
          DEFAULT: "#e9e1da",
          variant: "#d0c5b5",
        },
        "on-background": "#e9e1da",
        "on-primary": {
          DEFAULT: "#402d00",
          container: "#533d09",
          fixed: "#261a00",
          "fixed-variant": "#5a430f",
        },
        "on-secondary": {
          DEFAULT: "#412d00",
          container: "#d4b06d",
          fixed: "#261900",
          "fixed-variant": "#5c4308",
        },
        "on-tertiary": {
          DEFAULT: "#222f53",
          container: "#334064",
          fixed: "#0b1a3d",
          "fixed-variant": "#39466b",
        },
        // Utility
        outline: {
          DEFAULT: "#998f81",
          variant: "#4d463a",
        },
        error: {
          DEFAULT: "#ffb4ab",
          container: "#93000a",
        },
        "on-error": {
          DEFAULT: "#690005",
          container: "#ffdad6",
        },
        // Inverse
        "inverse-surface": "#e9e1da",
        "inverse-on-surface": "#33302b",
        "inverse-primary": "#735b25",
      },
      fontFamily: {
        "playfair": ["PlayfairDisplay"],
        "playfair-medium": ["PlayfairDisplay_500Medium"],
        "playfair-semibold": ["PlayfairDisplay_600SemiBold"],
        "manrope": ["Manrope"],
        "manrope-semibold": ["Manrope_600SemiBold"],
        "manrope-bold": ["Manrope_700Bold"],
      },
      spacing: {
        "gap-sm": 8,
        "gap-md": 16,
        "gap-lg": 32,
        "margin": 24,
        "section": 48,
      },
      borderRadius: {
        "xs": 2,
        "sm": 4,
        "md": 8,
        "lg": 12,
        "xl": 16,
        "2xl": 24,
      },
    },
  },
  plugins: [],
};
