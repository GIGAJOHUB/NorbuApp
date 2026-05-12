import React from "react";
import { View, ViewStyle } from "react-native";
import { BlurView } from "expo-blur";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  style?: ViewStyle;
  intensity?: number;
}

/**
 * Glassmorphism panel matching the .glass-panel CSS class from Stitch:
 * background: rgba(34, 31, 27, 0.6)
 * backdrop-filter: blur(24px)
 * border: 1px solid rgba(255, 255, 255, 0.05)
 */
export function GlassPanel({
  children,
  className,
  style,
  intensity = 40,
}: GlassPanelProps) {
  return (
    <View
      className={className}
      style={[
        {
          borderRadius: 16,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.05)",
        },
        style,
      ]}
    >
      <BlurView
        intensity={intensity}
        tint="dark"
        style={{
          flex: 1,
          backgroundColor: "rgba(34, 31, 27, 0.6)",
        }}
      >
        {children}
      </BlurView>
    </View>
  );
}
