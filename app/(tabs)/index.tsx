import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { ScreenContainer } from "@/components/layout/ScreenContainer";
import { GoldButton } from "@/components/ui/GoldButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Colors } from "@/constants/colors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = 220;

/**
 * Home Dashboard Screen
 * Matches the Stitch "Home Dashboard" design:
 * - Welcome greeting
 * - Active Stay Overview (bento card with property image)
 * - Concierge Quick Actions (asymmetric grid)
 * - Explore Dubai (horizontal scroll)
 */
export default function HomeScreen() {
  const router = useRouter();
  const [showUnderDev, setShowUnderDev] = useState(false);

  const showUnderDevModal = () => setShowUnderDev(true);

  return (
    <ScreenContainer>
      <View style={{ paddingHorizontal: 24 }}>
        {/* Welcome Section */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={{ marginBottom: 32 }}>
          <Text
            style={{
              fontFamily: "Manrope_400Regular",
              fontSize: 14,
              lineHeight: 22,
              color: Colors.onSurfaceVariant,
              marginBottom: 4,
            }}
          >
            Good evening,
          </Text>
          <Text
            style={{
              fontFamily: "PlayfairDisplay_600SemiBold",
              fontSize: 40,
              lineHeight: 44,
              letterSpacing: -0.8,
              color: Colors.onSurface,
            }}
          >
            Mr. Sterling
          </Text>
        </Animated.View>

        {/* Active Stay Overview Card */}
        <Animated.View entering={FadeInDown.delay(200).duration(700)} style={{ marginBottom: 48 }}>
          <Pressable
            onPress={() => router.push("/guest-experience")}
            style={({ pressed }) => ({
              width: "100%",
              aspectRatio: 4 / 5,
              borderRadius: 16,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.05)",
              opacity: pressed ? 0.95 : 1,
            })}
          >
            {/* Background Image */}
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIzDnsKkV2YYJeZV3V8F51wuU1jkJr5RAKfAgKXgj1Qccg_S2yDMSasaHhISiXTfQZIIxU_Tj1VuvsoO11bJKwxDKGemuPrzV9gjG38tNlc8xVX-E9UbZs3AZ-8umttsBewlc82Qd0ncbtYgojv3RT28XxXHSLnZjrrYZpNqgChA82VnnPKy3_hva2sY47DL6abobfc433VTXAm-syjSDKbxpozcOZfVEgb-ZkeTZp9u6451JiU0UkUkwHf61iIseWdJEfNyRGzhU",
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.8,
              }}
              contentFit="cover"
            />

            {/* Gradient Overlay */}
            <LinearGradient
              colors={["transparent", "rgba(11,11,13,0.6)", "#0B0B0D"]}
              locations={[0, 0.5, 1]}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />

            {/* Content */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: 24,
                justifyContent: "space-between",
              }}
            >
              {/* Active Stay Badge */}
              <View style={{ flexDirection: "row" }}>
                <StatusBadge label="Active Stay" variant="active" showPulse />
              </View>

              {/* Bottom Info */}
              <View>
                <Text
                  style={{
                    fontFamily: "PlayfairDisplay_500Medium",
                    fontSize: 32,
                    lineHeight: 38,
                    color: Colors.onSurface,
                    marginBottom: 4,
                  }}
                >
                  Penthouse 4A
                </Text>
                <Text
                  style={{
                    fontFamily: "Manrope_400Regular",
                    fontSize: 14,
                    color: "rgba(229, 196, 132, 0.8)",
                    marginBottom: 16,
                  }}
                >
                  The Opus, Business Bay
                </Text>

                {/* Check-out + CTA Row */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderTopWidth: 1,
                    borderTopColor: "rgba(255,255,255,0.1)",
                    paddingTop: 16,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: "Manrope_700Bold",
                        fontSize: 12,
                        letterSpacing: 1.2,
                        textTransform: "uppercase",
                        color: Colors.onSurfaceVariant,
                        marginBottom: 4,
                      }}
                    >
                      CHECK-OUT
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Manrope_600SemiBold",
                        fontSize: 20,
                        color: Colors.onSurface,
                      }}
                    >
                      Tomorrow
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Manrope_400Regular",
                        fontSize: 14,
                        color: Colors.onSurfaceVariant,
                      }}
                    >
                      11:00 AM
                    </Text>
                  </View>
                  <GoldButton title="Manage" icon="arrow-forward" onPress={() => router.push("/guest-experience")} />
                </View>
              </View>
            </View>
          </Pressable>
        </Animated.View>

        {/* Concierge Quick Actions */}
        <Animated.View entering={FadeInDown.delay(300).duration(600)} style={{ marginBottom: 48 }}>
          <Text
            style={{
              fontFamily: "PlayfairDisplay_500Medium",
              fontSize: 24,
              lineHeight: 31,
              color: Colors.onSurface,
              marginBottom: 16,
            }}
          >
            At Your Service
          </Text>

          {/* Primary Concierge Card */}
          <Pressable
            onPress={() => router.push("/(tabs)/concierge")}
            style={({ pressed }) => ({
              width: "100%",
              height: 128,
              borderRadius: 12,
              overflow: "hidden",
              backgroundColor: pressed ? Colors.surfaceContainerHigh : "#141416",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.05)",
              marginBottom: 8,
              flexDirection: "row",
              alignItems: "flex-end",
            })}
          >
            {/* Decorative background icon */}
            <View
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: 16,
                opacity: 0.1,
              }}
            >
              <MaterialIcons name="room-service" size={80} color={Colors.onSurface} />
            </View>

            {/* Foreground content — flex-based to avoid overlap */}
            <View
              style={{
                flex: 1,
                padding: 24,
              }}
            >
              <MaterialIcons
                name="room-service"
                size={24}
                color={Colors.primary}
                style={{ marginBottom: 8 }}
              />
              <Text
                style={{
                  fontFamily: "Manrope_600SemiBold",
                  fontSize: 20,
                  color: Colors.onSurface,
                }}
              >
                24/7 Concierge
              </Text>
              <Text
                style={{
                  fontFamily: "Manrope_400Regular",
                  fontSize: 14,
                  color: Colors.onSurfaceVariant,
                  marginTop: 4,
                }}
              >
                Dining, transport, requests
              </Text>
            </View>
          </Pressable>

          {/* Secondary Grid */}
          <View style={{ flexDirection: "row", gap: 8 }}>
            {/* Housekeeping */}
            <Pressable
              onPress={() => router.push("/ai-concierge")}
              style={({ pressed }) => ({
                flex: 1,
                height: 128,
                borderRadius: 12,
                backgroundColor: pressed ? Colors.surfaceContainer : Colors.surfaceContainerLow,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.05)",
                padding: 16,
                justifyContent: "space-between",
              })}
            >
              <MaterialIcons name="cleaning-services" size={24} color={Colors.onSurfaceVariant} />
              <Text
                style={{
                  fontFamily: "Manrope_600SemiBold",
                  fontSize: 16,
                  color: Colors.onSurface,
                }}
              >
                Housekeeping
              </Text>
            </Pressable>

            {/* Transport */}
            <Pressable
              onPress={() => router.push("/ai-concierge")}
              style={({ pressed }) => ({
                flex: 1,
                height: 128,
                borderRadius: 12,
                backgroundColor: pressed ? Colors.surfaceContainer : Colors.surfaceContainerLow,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.05)",
                padding: 16,
                justifyContent: "space-between",
              })}
            >
              <MaterialIcons name="airport-shuttle" size={24} color={Colors.onSurfaceVariant} />
              <Text
                style={{
                  fontFamily: "Manrope_600SemiBold",
                  fontSize: 16,
                  color: Colors.onSurface,
                }}
              >
                Transport
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>

      {/* Explore Dubai - Horizontal Scroll (full-bleed) */}
      <Animated.View entering={FadeInDown.delay(400).duration(600)} style={{ marginBottom: 48 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingHorizontal: 24,
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "PlayfairDisplay_500Medium",
              fontSize: 24,
              lineHeight: 31,
              color: Colors.onSurface,
            }}
          >
            Explore Dubai
          </Text>
          <Pressable onPress={() => router.push("/(tabs)/explore")}>
            <Text
              style={{
                fontFamily: "Manrope_700Bold",
                fontSize: 12,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                color: Colors.primary,
              }}
            >
              VIEW ALL
            </Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 24, paddingRight: 24, gap: 16 }}
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + 16}
          snapToAlignment="start"
        >
          {EXPLORE_CARDS.map((card, index) => (
            <Animated.View
              key={card.id}
              entering={FadeInRight.delay(500 + index * 100).duration(500)}
            >
              <ExperienceCard {...card} onPress={() => router.push("/ai-concierge")} />
            </Animated.View>
          ))}
        </ScrollView>
      </Animated.View>

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

/* Experience Card Component */
interface ExperienceCardData {
  id: string;
  category: string;
  title: string;
  imageUri: string;
  onPress?: () => void;
}

function ExperienceCard({ category, title, imageUri, onPress }: ExperienceCardData) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        width: CARD_WIDTH,
        aspectRatio: 4 / 5,
        borderRadius: 16,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <Image
        source={{ uri: imageUri }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7,
        }}
        contentFit="cover"
      />
      <LinearGradient
        colors={["transparent", "rgba(11,11,13,0.4)", "#0B0B0D"]}
        locations={[0, 0.5, 1]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "Manrope_700Bold",
            fontSize: 12,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            color: Colors.primary,
            marginBottom: 4,
          }}
        >
          {category}
        </Text>
        <Text
          style={{
            fontFamily: "Manrope_600SemiBold",
            fontSize: 18,
            lineHeight: 24,
            color: Colors.onSurface,
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

/* Data */
const EXPLORE_CARDS: ExperienceCardData[] = [
  {
    id: "yacht",
    category: "Charter",
    title: "Private Yacht Escapes",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6OD6RSLRAweDgiYnWMDGO6xnJtmcKYxws1JC6gx54b7CVZj_A0HWIZjsc2gIaCwrgt6QVQ5Ce-pD3nkYNFSizvboND3CInr08paxzDe77Ft4ewmFdoiRZGu0LMWSD0iQslA2NRJDWlt6Xbj5MOnwP8s9d9-XwIN9hp9fywnHj-zJFq7-gYUhiqBKhjqNjIY939880YeoK0Dqv2nNGi9dF7JV5zS3ytVn41PgyxGELSUT7grgnXYhEA9G1G5XjymjJ_U9bwtK2UOY",
  },
  {
    id: "dining",
    category: "Gastronomy",
    title: "Michelin Star Reservations",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDispjYZtsrD_fveBzV34aI4Rc93Z4FalZu43Gzrc1cnBD2qbkWH0DtrNi6eUqF6xobnpHF9l8vQ2KicTjdSlltEPCf5iK82zOn_oCLIIGy5KmGfDnos-yjJBRHwb_WFafXW9VvnY2FIS_KoZVHp7VrGRa5pz_5PG2HXaC6QkJMhM_gpHEkGrS87fWvjZ-5EsfzbJL5SwswYVGdKZJZF4k0FjUDaFZ-FPkVclVv3OmLnQQOgk17jen9-_0n2M9Apr1gj_yExjYTn2s",
  },
  {
    id: "spa",
    category: "Wellness",
    title: "Luxury Spa & Retreat",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD53vW-oQKH-QStfW2nEv1M5KHCHc1pd-MSNI0VqiC_GtWZe204W7rOAF-viwg92Zk96nOPTUIamqx0ZKzjgviG6rbWnU3snyTsActliNZ-qwWM2D-5raRW36J8_jkA7nABUUYhL7FX-fOm-QjAbOo8PzZtdPJP2dZjTKCCqhbaDJr9-SfPDISOhRKjawOsxnZNZUtEfsfMU1UR_zDWpnwczA77xbJfbmw6z03Ox7BsbcAxT0JArIZGTokYOcbCZ-J0gn7uWpOhgCg",
  },
];
