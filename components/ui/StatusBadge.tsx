import React from "react";
import { View, Text } from "react-native";
import { Colors } from "@/constants/colors";

interface StatusBadgeProps {
  label: string;
  variant?: "active" | "pending" | "default";
  showPulse?: boolean;
}

/**
 * Status badge matching Stitch designs:
 * - Active: gold bg with pulse dot
 * - Pending: surface bg with outline
 * - Default: surface bg
 */
export function StatusBadge({
  label,
  variant = "default",
  showPulse = false,
}: StatusBadgeProps) {
  const getBgColor = () => {
    switch (variant) {
      case "active":
        return "rgba(229, 196, 132, 0.1)";
      case "pending":
        return Colors.surface;
      default:
        return "rgba(34, 31, 27, 0.5)";
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "active":
        return Colors.primary;
      case "pending":
        return Colors.onSurfaceVariant;
      default:
        return Colors.onSurface;
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: getBgColor(),
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor:
          variant === "active"
            ? "rgba(229, 196, 132, 0.2)"
            : "rgba(255, 255, 255, 0.1)",
      }}
    >
      {showPulse && (
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: Colors.primary,
          }}
        />
      )}
      <Text
        style={{
          fontFamily: "Manrope_700Bold",
          fontSize: 12,
          letterSpacing: 1.2,
          textTransform: "uppercase",
          color: getTextColor(),
        }}
      >
        {label}
      </Text>
    </View>
  );
}
