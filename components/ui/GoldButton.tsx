import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";

interface GoldButtonProps {
  title: string;
  onPress?: () => void;
  variant?: "filled" | "outlined";
  icon?: string;
  style?: ViewStyle;
  fullWidth?: boolean;
}

/**
 * Premium gold CTA button matching Stitch design:
 * - Filled: bg-primary text-on-primary
 * - Outlined: border-primary text-primary
 */
export function GoldButton({
  title,
  onPress,
  variant = "filled",
  icon,
  style,
  fullWidth = false,
}: GoldButtonProps) {
  const isFilled = variant === "filled";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          paddingHorizontal: 24,
          paddingVertical: 14,
          borderRadius: 24,
          backgroundColor: isFilled
            ? pressed
              ? Colors.primaryFixed
              : Colors.primary
            : pressed
              ? "rgba(229, 196, 132, 0.1)"
              : "transparent",
          borderWidth: isFilled ? 0 : 1,
          borderColor: isFilled ? "transparent" : Colors.primary,
          opacity: pressed ? 0.9 : 1,
          ...(fullWidth ? { width: "100%" } : {}),
        },
        style,
      ]}
    >
      <Text
        style={{
          fontFamily: "Manrope_700Bold",
          fontSize: 12,
          letterSpacing: 1.2,
          textTransform: "uppercase",
          color: isFilled ? Colors.onPrimary : Colors.primary,
        }}
      >
        {title}
      </Text>
      {icon && (
        <MaterialIcons
          name={icon as any}
          size={18}
          color={isFilled ? Colors.onPrimary : Colors.primary}
        />
      )}
    </Pressable>
  );
}
