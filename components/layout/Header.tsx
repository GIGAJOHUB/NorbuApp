import React from "react";
import { View, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/colors";

interface HeaderProps {
  showMenu?: boolean;
  onMenuPress?: () => void;
}

/**
 * Shared TopAppBar component
 * NORBU gold logo centered, menu left (navigates to Profile), avatar right.
 * Glassmorphic backdrop blur with thin bottom border.
 */
export function Header({ showMenu = true, onMenuPress }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleMenuPress = () => {
    if (onMenuPress) {
      onMenuPress();
    } else {
      // Default: navigate to Profile tab
      router.push("/(tabs)/profile");
    }
  };

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: insets.top,
      }}
    >
      <BlurView
        intensity={60}
        tint="dark"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 24,
          height: 56,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(255,255,255,0.05)",
        }}
      >
        {/* Menu Button → navigates to Profile */}
        {showMenu ? (
          <Pressable
            onPress={handleMenuPress}
            style={{ padding: 8, marginLeft: -8 }}
            accessibilityLabel="Menu"
          >
            <MaterialIcons name="menu" size={24} color={Colors.primary} />
          </Pressable>
        ) : (
          <View style={{ width: 40 }} />
        )}

        {/* Brand Logo */}
        <Text
          style={{
            fontFamily: "PlayfairDisplay_500Medium",
            fontSize: 22,
            letterSpacing: 6,
            color: Colors.primary,
          }}
        >
          NORBU
        </Text>

        {/* Profile Avatar → navigates to Profile */}
        <Pressable
          onPress={() => router.push("/(tabs)/profile")}
          accessibilityLabel="Profile"
          style={{ borderRadius: 20 }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBulGE-iLJe8zG5EDfiqWasIaqqyyn1sn3k9QgMOJqbgEjob0hcprl5MU5olXQIplKPCvznnK0CxeQJJNxAP0c5wtfr3CQtVzkctS-CtMjZUqdZM1MQr0oOnBRP4JwSSfiYROUnK6ZMPCM2MzojzYvkvjuqNw7Ic3AqtYHJfWruPvwAkM23Ln0I__zrht7IFI4mVS6VpykNd_GvzkGgj0qpQioyYVwOH_uWox0U0V-sraM8NC2d4iqS2hhn5QjpDSSddJBw4NBBVk8",
              }}
              style={{ width: 32, height: 32 }}
              contentFit="cover"
            />
          </View>
        </Pressable>
      </BlurView>
    </View>
  );
}
