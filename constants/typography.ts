/**
 * Norbu Homes — Typography System
 * Maps the Stitch design system typography roles to React Native font properties.
 */
export const Typography = {
  displayLg: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 40,
    lineHeight: 44,
    letterSpacing: -0.8,
  },
  headlineLg: {
    fontFamily: "PlayfairDisplay_500Medium",
    fontSize: 32,
    lineHeight: 38.4,
  },
  headlineMd: {
    fontFamily: "PlayfairDisplay_500Medium",
    fontSize: 24,
    lineHeight: 31.2,
  },
  titleLg: {
    fontFamily: "Manrope_600SemiBold",
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.2,
  },
  bodyLg: {
    fontFamily: "Manrope_400Regular",
    fontSize: 16,
    lineHeight: 25.6,
  },
  bodyMd: {
    fontFamily: "Manrope_400Regular",
    fontSize: 14,
    lineHeight: 22.4,
  },
  labelCaps: {
    fontFamily: "Manrope_700Bold",
    fontSize: 12,
    lineHeight: 14.4,
    letterSpacing: 1.2,
    textTransform: "uppercase" as const,
  },
} as const;

export type TypographyRole = keyof typeof Typography;
