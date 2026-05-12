import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Colors } from "@/constants/colors";

export default function GuestExperienceScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Hero Image */}
        <View style={{ width: "100%", height: 440 }}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYF5EVdvAQRi2r-B8WvCoRkEhddSzZ7aknJCj12XqFMvae60xiMw3Wj2jsJNB_LCDCcMWNsPAAUi5dxwobaYSccOOI2ZeyXIQ3xxOJRsJNgP86_p55Sr8wyMFp1Di7dC7zqiQVvffpdxoJM9HZlkj5QhiR_pU0d9JapT1fX-MJu1dp8_4ib0tFe7ZD5fRwQp8oGYfWgDPnOqQV0PN0Z1sUdn2HnrbpSTZiapasdoHEQi6mnxN3PYkY4zTc4j7JAA5iJjhyW4bvXsU",
            }}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
          <LinearGradient
            colors={["transparent", "rgba(22,19,15,0.4)", Colors.background]}
            locations={[0, 0.4, 1]}
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          />
          {/* Back Button */}
          <Pressable
            onPress={() => router.back()}
            style={{
              position: "absolute",
              top: insets.top + 12,
              left: 24,
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(22,19,15,0.5)",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.1)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="arrow-back" size={20} color={Colors.onSurface} />
          </Pressable>
          {/* Bottom text overlay */}
          <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24 }}>
            <Text
              style={{
                fontFamily: "Manrope_700Bold",
                fontSize: 12,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                color: Colors.primary,
                marginBottom: 8,
              }}
            >
              Active Stay
            </Text>
            <Text
              style={{
                fontFamily: "PlayfairDisplay_600SemiBold",
                fontSize: 36,
                lineHeight: 42,
                color: Colors.onSurface,
                marginBottom: 4,
              }}
            >
              The Royal Atlantis
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <MaterialIcons name="location-on" size={16} color={Colors.onSurfaceVariant} />
              <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 16, color: Colors.onSurfaceVariant }}>
                Palm Jumeirah, Dubai
              </Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={{ paddingHorizontal: 24, gap: 24, marginTop: 24 }}>
          {/* Smart Access Card */}
          <Animated.View entering={FadeInDown.delay(100).duration(500)}>
            <View
              style={{
                backgroundColor: Colors.glassBackground,
                borderRadius: 16,
                padding: 24,
                borderWidth: 1,
                borderColor: Colors.glassBorder,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.surfaceVariant, alignItems: "center", justifyContent: "center" }}>
                  <MaterialIcons name="lock" size={20} color={Colors.primary} />
                </View>
                <View style={{ backgroundColor: "rgba(229,196,132,0.1)", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
                  <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, color: Colors.primary }}>Active</Text>
                </View>
              </View>
              <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 20, color: Colors.onSurface, marginBottom: 8 }}>
                Smart Access
              </Text>
              <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, lineHeight: 22, color: Colors.onSurfaceVariant, marginBottom: 20 }}>
                Tap to unlock via Bluetooth or use your temporary PIN.
              </Text>
              <Pressable
                style={({ pressed }) => ({
                  backgroundColor: pressed ? Colors.primaryFixedDim : Colors.primary,
                  borderRadius: 12,
                  paddingVertical: 14,
                  alignItems: "center",
                })}
              >
                <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 16, color: Colors.onPrimary }}>Reveal PIN</Text>
              </Pressable>
            </View>
          </Animated.View>

          {/* Stay Details */}
          <Animated.View entering={FadeInDown.delay(200).duration(500)}>
            <View
              style={{
                backgroundColor: Colors.glassBackground,
                borderRadius: 16,
                padding: 24,
                borderWidth: 1,
                borderColor: Colors.glassBorder,
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: "rgba(255,255,255,0.05)", paddingRight: 16 }}>
                <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 11, letterSpacing: 1, color: Colors.onSurfaceVariant, textTransform: "uppercase", marginBottom: 8 }}>Check-In</Text>
                <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 18, color: Colors.onSurface }}>May 10</Text>
                <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 13, color: Colors.onSurfaceVariant, marginTop: 2 }}>3:00 PM</Text>
              </View>
              <View style={{ flex: 1, paddingLeft: 16 }}>
                <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 11, letterSpacing: 1, color: Colors.onSurfaceVariant, textTransform: "uppercase", marginBottom: 8 }}>Check-Out</Text>
                <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 18, color: Colors.onSurface }}>May 14</Text>
                <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 13, color: Colors.onSurfaceVariant, marginTop: 2 }}>11:00 AM</Text>
              </View>
            </View>
          </Animated.View>

          {/* Concierge CTA */}
          <Animated.View entering={FadeInDown.delay(300).duration(500)}>
            <View
              style={{
                backgroundColor: Colors.glassBackground,
                borderRadius: 16,
                padding: 24,
                borderWidth: 1,
                borderColor: "rgba(229,196,132,0.2)",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
                <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: Colors.primary, alignItems: "center", justifyContent: "center" }}>
                  <MaterialIcons name="room-service" size={24} color={Colors.onPrimary} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontFamily: "PlayfairDisplay_500Medium", fontSize: 22, color: Colors.onSurface, marginBottom: 8 }}>
                    Dedicated Concierge
                  </Text>
                  <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, lineHeight: 22, color: Colors.onSurfaceVariant }}>
                    Your personal attaché is available 24/7 for dining, transport, or special requests.
                  </Text>
                </View>
              </View>
              <Pressable
                onPress={() => router.push("/ai-concierge")}
                style={({ pressed }) => ({
                  borderWidth: 1,
                  borderColor: Colors.primary,
                  borderRadius: 12,
                  paddingVertical: 14,
                  alignItems: "center",
                  backgroundColor: pressed ? "rgba(229,196,132,0.1)" : "transparent",
                })}
              >
                <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 16, color: Colors.primary }}>Request Service</Text>
              </Pressable>
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
}
