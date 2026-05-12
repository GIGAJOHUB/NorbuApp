import React from "react";
import { Text, TextStyle } from "react-native";
import { Colors } from "@/constants/colors";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  labelStyle?: TextStyle;
  titleStyle?: TextStyle;
}

/**
 * Section header matching the Stitch pattern:
 * - Optional label-caps gold label
 * - headline-lg/headline-md title
 * - Optional body-lg subtitle
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  labelStyle,
  titleStyle,
}: SectionHeaderProps) {
  return (
    <>
      {label && (
        <Text
          style={[
            {
              fontFamily: "Manrope_700Bold",
              fontSize: 12,
              lineHeight: 14.4,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: Colors.primary,
              marginBottom: 8,
            },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}
      <Text
        style={[
          {
            fontFamily: "PlayfairDisplay_500Medium",
            fontSize: 24,
            lineHeight: 31,
            color: Colors.onSurface,
          },
          titleStyle,
        ]}
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          style={{
            fontFamily: "Manrope_400Regular",
            fontSize: 16,
            lineHeight: 25.6,
            color: Colors.onSurfaceVariant,
            marginTop: 8,
          }}
        >
          {subtitle}
        </Text>
      )}
    </>
  );
}
