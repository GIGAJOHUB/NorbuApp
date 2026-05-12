import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "./Header";

interface ScreenContainerProps {
  children: React.ReactNode;
  showHeader?: boolean;
  scrollable?: boolean;
}

/**
 * Shared screen wrapper that handles:
 * - Safe area insets
 * - Top header offset
 * - Bottom tab bar offset
 * - Background color
 * - Scroll view wrapping
 */
export function ScreenContainer({
  children,
  showHeader = true,
  scrollable = true,
}: ScreenContainerProps) {
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + 56;
  const bottomPadding = 100; // Tab bar height + spacing

  const content = (
    <View
      style={{
        flex: 1,
        paddingTop: showHeader ? headerHeight + 16 : insets.top + 16,
      }}
    >
      {children}
    </View>
  );

  return (
    <View className="flex-1 bg-background">
      {scrollable ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: bottomPadding }}
          bounces={true}
          overScrollMode="never"
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
      {showHeader && <Header />}
    </View>
  );
}
