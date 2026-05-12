import React, { useState } from "react";
import { View, Text, Pressable, Switch, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";
import { ScreenContainer } from "@/components/layout/ScreenContainer";
import { GoldButton } from "@/components/ui/GoldButton";
import { Colors } from "@/constants/colors";

const MENU_SECTIONS = [
  {
    title: "Account",
    items: [
      { icon: "person-outline", label: "Personal Information", chevron: true },
      { icon: "credit-card", label: "Payment Methods", chevron: true },
      { icon: "history", label: "Booking History", chevron: true },
      { icon: "favorite-outline", label: "Saved Properties", chevron: true },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: "notifications-none", label: "Notifications", toggle: true },
      { icon: "language", label: "Language", value: "English", chevron: true },
      { icon: "dark-mode", label: "Dark Mode", toggle: true, defaultOn: true },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: "help-outline", label: "Help & FAQ", chevron: true },
      { icon: "chat-bubble-outline", label: "Contact Support", chevron: true },
      { icon: "description", label: "Terms & Privacy", chevron: true },
    ],
  },
];

export default function ProfileScreen() {
  const [showUnderDev, setShowUnderDev] = useState(false);
  const showUnderDevModal = () => setShowUnderDev(true);

  return (
    <ScreenContainer>
      <View style={{ paddingHorizontal: 24 }}>
        {/* Profile Header */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={{ alignItems: "center", marginBottom: 32 }}>
          <View style={{ width: 96, height: 96, borderRadius: 48, overflow: "hidden", borderWidth: 2, borderColor: Colors.primary, marginBottom: 16 }}>
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBulGE-iLJe8zG5EDfiqWasIaqqyyn1sn3k9QgMOJqbgEjob0hcprl5MU5olXQIplKPCvznnK0CxeQJJNxAP0c5wtfr3CQtVzkctS-CtMjZUqdZM1MQr0oOnBRP4JwSSfiYROUnK6ZMPCM2MzojzYvkvjuqNw7Ic3AqtYHJfWruPvwAkM23Ln0I__zrht7IFI4mVS6VpykNd_GvzkGgj0qpQioyYVwOH_uWox0U0V-sraM8NC2d4iqS2hhn5QjpDSSddJBw4NBBVk8" }}
              style={{ width: 96, height: 96 }}
              contentFit="cover"
            />
          </View>
          <Text style={{ fontFamily: "PlayfairDisplay_600SemiBold", fontSize: 28, color: Colors.onSurface, marginBottom: 4 }}>James Sterling</Text>
          <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, color: Colors.onSurfaceVariant }}>Platinum Member • Since 2021</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginTop: 8 }}>
            <MaterialIcons name="location-on" size={14} color={Colors.primary} />
            <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, color: Colors.primary }}>Downtown Dubai</Text>
          </View>
        </Animated.View>

        {/* Stats Row */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={{ flexDirection: "row", backgroundColor: Colors.surfaceContainer, borderRadius: 16, padding: 20, marginBottom: 32, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)" }}>
          {[{ label: "Stays", value: "24" }, { label: "Reviews", value: "18" }, { label: "Points", value: "42K" }].map((s, i) => (
            <View key={s.label} style={{ flex: 1, alignItems: "center", borderRightWidth: i < 2 ? 1 : 0, borderRightColor: "rgba(255,255,255,0.05)" }}>
              <Text style={{ fontFamily: "PlayfairDisplay_500Medium", fontSize: 24, color: Colors.onSurface }}>{s.value}</Text>
              <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 11, letterSpacing: 1, color: Colors.onSurfaceVariant, textTransform: "uppercase", marginTop: 4 }}>{s.label}</Text>
            </View>
          ))}
        </Animated.View>

        {/* Menu Sections */}
        {MENU_SECTIONS.map((section, si) => (
          <Animated.View key={section.title} entering={FadeInDown.delay(300 + si * 100).duration(500)} style={{ marginBottom: 24 }}>
            <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1.2, color: Colors.onSurfaceVariant, textTransform: "uppercase", marginBottom: 12 }}>{section.title}</Text>
            <View style={{ backgroundColor: Colors.surfaceContainer, borderRadius: 16, overflow: "hidden", borderWidth: 1, borderColor: "rgba(255,255,255,0.05)" }}>
              {section.items.map((item, ii) => (
                <Pressable onPress={item.toggle ? undefined : showUnderDevModal} key={item.label} style={({ pressed }) => ({ flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: pressed ? Colors.surfaceContainerHigh : "transparent", borderBottomWidth: ii < section.items.length - 1 ? 1 : 0, borderBottomColor: "rgba(255,255,255,0.05)" })}>
                  <MaterialIcons name={item.icon as any} size={22} color={Colors.onSurfaceVariant} style={{ marginRight: 16 }} />
                  <Text style={{ flex: 1, fontFamily: "Manrope_400Regular", fontSize: 16, color: Colors.onSurface }}>{item.label}</Text>
                  {item.value && <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, color: Colors.onSurfaceVariant, marginRight: 8 }}>{item.value}</Text>}
                  {item.toggle && <Switch trackColor={{ false: Colors.surfaceVariant, true: Colors.primary }} thumbColor={Colors.onSurface} value={item.defaultOn ?? false} />}
                  {item.chevron && <MaterialIcons name="chevron-right" size={20} color={Colors.outline} />}
                </Pressable>
              ))}
            </View>
          </Animated.View>
        ))}

        {/* Sign Out */}
        <Animated.View entering={FadeInDown.delay(700).duration(500)} style={{ marginBottom: 16 }}>
          <Pressable onPress={showUnderDevModal} style={({ pressed }) => ({ padding: 16, borderRadius: 16, backgroundColor: pressed ? "rgba(255,180,171,0.1)" : "transparent", borderWidth: 1, borderColor: "rgba(255,180,171,0.2)", alignItems: "center" })}>
            <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 16, color: Colors.error }}>Sign Out</Text>
          </Pressable>
        </Animated.View>

        <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 12, color: Colors.outline, textAlign: "center", marginBottom: 16 }}>Norbu Homes v1.0.0</Text>
      </View>

      {/* Under Development Modal */}
      <Modal
        visible={showUnderDev}
        transparent
        animationType="fade"
        onRequestClose={() => setShowUnderDev(false)}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.7)",
            justifyContent: "center",
            alignItems: "center",
            padding: 32,
          }}
          onPress={() => setShowUnderDev(false)}
        >
          <View
            style={{
              backgroundColor: Colors.surfaceContainerHigh,
              borderRadius: 24,
              padding: 32,
              alignItems: "center",
              maxWidth: 320,
              width: "100%",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: "rgba(229, 196, 132, 0.15)",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <MaterialIcons name="engineering" size={32} color={Colors.primary} />
            </View>
            <Text
              style={{
                fontFamily: "PlayfairDisplay_500Medium",
                fontSize: 22,
                color: Colors.onSurface,
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              Under Development
            </Text>
            <Text
              style={{
                fontFamily: "Manrope_400Regular",
                fontSize: 14,
                lineHeight: 22,
                color: Colors.onSurfaceVariant,
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              This feature is currently being crafted with care. Stay tuned for updates.
            </Text>
            <GoldButton title="Dismiss" onPress={() => setShowUnderDev(false)} fullWidth />
          </View>
        </Pressable>
      </Modal>
    </ScreenContainer>
  );
}
