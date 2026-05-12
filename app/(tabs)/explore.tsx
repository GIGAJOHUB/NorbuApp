import React from "react";
import { View, Text, Pressable, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { ScreenContainer } from "@/components/layout/ScreenContainer";
import { Colors } from "@/constants/colors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SCROLL_CARD_WIDTH = 260;

/**
 * Explore Dubai Screen
 * Matches the Stitch "Explore Dubai" design:
 * - Full-bleed hero image with overlay
 * - "Signatures" bento grid categories
 * - "Trending Now" horizontal scroll
 */

// Bento grid items
interface BentoItem {
  id: string;
  icon: string;
  label: string;
  title: string;
  subtitle?: string;
  imageUri: string;
  aspectRatio?: number;
}

const BENTO_ITEMS: BentoItem[] = [
  {
    id: "rooftops",
    icon: "local-bar",
    label: "Sky-High",
    title: "Rooftop Lounges",
    subtitle: "Elevate your evening with panoramic views and bespoke mixology.",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjqw8SL3rWBydyBUJpZkZEEeB0F5qO4PO26GZdRp0viupIUIfDxfuzDl-eHdyx1dK9pznuIelkx1R7O2et9qOU-3SxN01ZDMMvDGTUgD2-SP6d0tnVyv_5A7PT4vFpryYW3RVEINOxE7ThJG0aFWJhYFONbYBQQKY8ybRVII_6KtPBQk-9QG33BNLqyRRbMyxhxS4qzQboywgSznilQylpe54ZZbGjvYs7ZkiLCwdcXMNkq9F3QAEy48HPJ4nCo2ykuQIZAsxEvVY",
    aspectRatio: 16 / 10,
  },
  {
    id: "beach",
    icon: "beach-access",
    label: "Riviera",
    title: "Beach Clubs",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHNx0RYKgpFQu6qLN8qK8UAJ9Cx8gTgZZKtMXCiHxIcwLNTxnfqRTIjUK6d3pOIk9N0hKloAmo-oAecig59eteSMByX8XiFdgoC6bjIpG9JkEBDnRAhTR-7VJcbqx71YEzex1A3NZNv3hD_jy4qiGP-gPSUuo6ZdhgmQY1anc_zuQKbZYPlj8oGgVm_NVcO4dGoOHpIKshhHk7tfHTc2VE3QvlB-WI8w0vCywp9P3POYZF6kT7N-2M5BMU8JyDrJDQLvB70xI5T4Q",
    aspectRatio: 3 / 4,
  },
  {
    id: "shopping",
    icon: "shopping-bag",
    label: "Haute Couture",
    title: "Luxury Retail",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOHdTPqDIFuEEVuR_6Z-h9kTTsMLoH6_GXY5WIeBJ1svS4jV7HJpL18WTV_GjRfc5ekbPOKKiNP-zVPGqisuhTv1tLFKU8Yn3c1RaVNt98ux61iE-Xo-1CpPFFJ9zGC_7qEIdjkacV0u-fjZJKnYW_dZx1U9Q6SDp-BE9Mde1-6EEMy69ZmSBYTMc9oUCFZ4-pt9Gx08PmLgq3g3ZyZfLXqdqNTgl_RO1gmdIbF7584JTAsx0jblt4UaJHXvJNJ1V7O1UFveThID0",
    aspectRatio: 16 / 8,
  },
];

// Trending items
interface TrendingItem {
  id: string;
  title: string;
  location: string;
  category: string;
  imageUri: string;
}

const TRENDING_ITEMS: TrendingItem[] = [
  {
    id: "galaxy",
    title: "Galaxy Bar",
    location: "DIFC",
    category: "Lounge",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDN5h8GFzv-XPOo8zykjz9tHXhEnZIiazxFvX69brlU2eUJRxk7dP2MVkwLtfMkWhGpwx4O7hxAZTI1Wl009jQxG1mzt7413wbBzE22P5sLmZRZ41FXOJlW6Ocs33XKqXdAFQTZ6ylax6Dj-MNpaWw2im2X8dblrANFKiKSm58pdfLhPJ4nh7vZZnWNZAyuBdssYVPS7rNgiesjFeOlsNrUi4PbZ1fJeO-xHhlUyjagoMs8BbHsz36Fk6GYIuYQ6ByNl-gffEISeF0",
  },
  {
    id: "aura",
    title: "Aura Skypool",
    location: "Palm Jumeirah",
    category: "Beach Club",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD53vW-oQKH-QStfW2nEv1M5KHCHc1pd-MSNI0VqiC_GtWZe204W7rOAF-viwg92Zk96nOPTUIamqx0ZKzjgviG6rbWnU3snyTsActliNZ-qwWM2D-5raRW36J8_jkA7nABUUYhL7FX-fOm-QjAbOo8PzZtdPJP2dZjTKCCqhbaDJr9-SfPDISOhRKjawOsxnZNZUtEfsfMU1UR_zDWpnwczA77xbJfbmw6z03Ox7BsbcAxT0JArIZGTokYOcbCZ-J0gn7uWpOhgCg",
  },
  {
    id: "fashion",
    title: "Fashion Avenue",
    location: "Downtown",
    category: "Retail",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDA_FY_bpIEIGgsfNuyYBNmUhfmXFnvRBPaBBlP458Jdfl9B1jclE4XJkKglNOZ4PYJuP85h-WQS-vINVKCyYiX6hrVLld7aOQrenmjWWUdq_w54UoOlNDzxuKrBheSst4ESkKjk5b6Q2U9QSEHehiOBnD9U7Y7IbRcv0UStOkPm4jG9lf9j_06PlohFHv_l38QAQlB2L9Tka8emZfge2ZCRWB24KYuZpA_PiHrc5COBi_t7aOOAz5CHsLv38w0jfgrAGugYIZsCIQ",
  },
];

export default function ExploreScreen() {
  return (
    <ScreenContainer showHeader={true}>
      {/* Hero Section */}
      <Animated.View entering={FadeInDown.delay(100).duration(700)}>
        <View
          style={{
            width: SCREEN_WIDTH,
            height: 420,
            marginTop: -16,
          }}
        >
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUYW_PjEv5LwXH43L11kqcVwKbPmwl5CUoTFistFCePQWjYPFCMyhg9olCDfnHGu3V8jrjCGdijk--TuV5k94Qpx-a-G7GJ_1WeZ6b6LAY_bGIunpSsB9Squgo_z80J9HSDfBhDUbn1qG8GnhWUo_A8c85vtcr-mnvVFdJHCzcmYhhcm6FMwEPbJ3MjQQ4IHMEBzsJQ-u3G_Fi_A2hbnytSU6YTwsVZepL5WGu8HrNoF8UfiuEtZRazyX0WOm-uYrZrwHvZVb1Vfo",
            }}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
          <LinearGradient
            colors={["transparent", "rgba(22,19,15,0.6)", Colors.background]}
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
              padding: 24,
            }}
          >
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
              CURATED EXPERIENCES
            </Text>
            <Text
              style={{
                fontFamily: "PlayfairDisplay_600SemiBold",
                fontSize: 40,
                lineHeight: 44,
                letterSpacing: -0.8,
                color: Colors.onSurface,
                marginBottom: 8,
              }}
            >
              Explore Dubai
            </Text>
            <Text
              style={{
                fontFamily: "Manrope_400Regular",
                fontSize: 16,
                lineHeight: 25.6,
                color: Colors.onSurfaceVariant,
              }}
            >
              Discover the pinnacle of metropolitan luxury.
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* Signatures Bento Grid */}
      <Animated.View
        entering={FadeInDown.delay(300).duration(600)}
        style={{ paddingHorizontal: 24, marginTop: 32 }}
      >
        <Text
          style={{
            fontFamily: "PlayfairDisplay_500Medium",
            fontSize: 32,
            lineHeight: 38,
            color: Colors.onSurface,
            marginBottom: 16,
          }}
        >
          Signatures
        </Text>

        {BENTO_ITEMS.map((item, index) => (
          <Animated.View
            key={item.id}
            entering={FadeInDown.delay(400 + index * 100).duration(500)}
            style={{ marginBottom: 16 }}
          >
            <BentoCard item={item} />
          </Animated.View>
        ))}
      </Animated.View>

      {/* Trending Now - Horizontal Scroll */}
      <Animated.View
        entering={FadeInDown.delay(700).duration(600)}
        style={{ marginTop: 16, marginBottom: 32 }}
      >
        <Text
          style={{
            fontFamily: "PlayfairDisplay_500Medium",
            fontSize: 32,
            lineHeight: 38,
            color: Colors.onSurface,
            paddingHorizontal: 24,
            marginBottom: 16,
          }}
        >
          Trending Now
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          decelerationRate="fast"
          snapToInterval={SCROLL_CARD_WIDTH + 16}
          snapToAlignment="start"
        >
          {TRENDING_ITEMS.map((item, index) => (
            <Animated.View
              key={item.id}
              entering={FadeInRight.delay(800 + index * 100).duration(500)}
            >
              <TrendingCard item={item} />
            </Animated.View>
          ))}
        </ScrollView>
      </Animated.View>
    </ScreenContainer>
  );
}

/* Bento Card */
function BentoCard({ item }: { item: BentoItem }) {
  return (
    <Pressable
      style={{
        width: "100%",
        height: 240,
        borderRadius: 16,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <Image
        source={{ uri: item.imageUri }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        contentFit="cover"
      />
      <LinearGradient
        colors={["transparent", "rgba(22,19,15,0.2)", "rgba(22,19,15,0.9)"]}
        locations={[0, 0.4, 1]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
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
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <MaterialIcons name={item.icon as any} size={16} color={Colors.primary} />
          <Text
            style={{
              fontFamily: "Manrope_700Bold",
              fontSize: 12,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: Colors.primary,
            }}
          >
            {item.label}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Manrope_600SemiBold",
            fontSize: 20,
            color: Colors.onSurface,
          }}
        >
          {item.title}
        </Text>
        {item.subtitle && (
          <Text
            style={{
              fontFamily: "Manrope_400Regular",
              fontSize: 14,
              color: Colors.onSurfaceVariant,
              marginTop: 4,
            }}
            numberOfLines={2}
          >
            {item.subtitle}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

/* Trending Card */
function TrendingCard({ item }: { item: TrendingItem }) {
  return (
    <View style={{ width: SCROLL_CARD_WIDTH }}>
      <View
        style={{
          width: SCROLL_CARD_WIDTH,
          aspectRatio: 4 / 5,
          borderRadius: 16,
          overflow: "hidden",
          marginBottom: 12,
        }}
      >
        <Image
          source={{ uri: item.imageUri }}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
        />
        {/* Bookmark */}
        <View
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: "rgba(22,19,15,0.5)",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <MaterialIcons name="bookmark-outline" size={16} color={Colors.onSurface} />
        </View>
      </View>
      <Text
        style={{
          fontFamily: "Manrope_600SemiBold",
          fontSize: 20,
          color: Colors.onSurface,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontFamily: "Manrope_400Regular",
          fontSize: 14,
          color: Colors.onSurfaceVariant,
          marginTop: 4,
        }}
      >
        {item.location} • {item.category}
      </Text>
    </View>
  );
}
