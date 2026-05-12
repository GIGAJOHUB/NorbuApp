import { useEffect, useRef } from "react";
import { View, Text, Animated, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

const { width, height } = Dimensions.get("window");

/**
 * Splash Screen
 * Cinematic Dubai skyline silhouette background with:
 * - "NORBU HOMES" display-lg gold text entrance
 * - Elegant divider line sweep
 * - "Luxury Living, Seamlessly Managed" tagline
 * - Subtle full-screen fade-out before navigating to tabs
 */
export default function SplashScreenPage() {
  const router = useRouter();
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoTranslateY = useRef(new Animated.Value(20)).current;
  const dividerWidth = useRef(new Animated.Value(0)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const bgOpacity = useRef(new Animated.Value(0)).current;
  const screenFadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Staggered entrance animations
    Animated.sequence([
      // Background fade in
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Logo entrance
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(logoTranslateY, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
      // Divider line sweep
      Animated.timing(dividerWidth, {
        toValue: 48,
        duration: 500,
        useNativeDriver: false,
      }),
      // Tagline fade in
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // After content is visible, hold briefly, then fade the entire screen out
    const timeout = setTimeout(() => {
      Animated.timing(screenFadeOut, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        router.replace("/(tabs)");
      });
    }, 3200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "#16130f",
        alignItems: "center",
        justifyContent: "center",
        opacity: screenFadeOut,
      }}
    >
      {/* Cinematic Background */}
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: height * 0.65,
          opacity: bgOpacity,
        }}
      >
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK9V4DuVobtj3SjWRQCu044UOIfteDmph1dYbfgujkG3mQSDq66GwaAyIUmSG5Gi6YRysJR8VR7DzLGI6qRFT92Mis5wWXLcLPUsqolrM7NY7vu0hGyHgl5DkYhsyG1kdQkC3jCKndWmchOSTK-ZMFgOZSve1_P9Q3wlx8Inwt5nFTqq4UL2zZ4bBKWGn-3hyiqzW3snYcZMui7zTeekQwAwc2BQm51_YnfS2vDg_onWzuBb84v_zNpuAmDHgSUki6-ThTRO3NyF0",
          }}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.15,
          }}
          contentFit="cover"
          contentPosition="bottom"
        />
        {/* Gradient overlay */}
        <LinearGradient
          colors={["#16130f", "rgba(22,19,15,0.6)", "transparent"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </Animated.View>

      {/* Logo + Content */}
      <View style={{ alignItems: "center", paddingHorizontal: 24, zIndex: 10 }}>
        <Animated.Text
          style={{
            fontFamily: "PlayfairDisplay_600SemiBold",
            fontSize: 40,
            lineHeight: 44,
            letterSpacing: 8,
            color: "#e5c484",
            opacity: logoOpacity,
            transform: [{ translateY: logoTranslateY }],
            textAlign: "center",
          }}
        >
          NORBU HOMES
        </Animated.Text>

        {/* Elegant Divider */}
        <Animated.View
          style={{
            height: 1,
            backgroundColor: "rgba(229, 196, 132, 0.4)",
            marginTop: 16,
            marginBottom: 16,
            width: dividerWidth,
          }}
        />

        {/* Tagline */}
        <Animated.Text
          style={{
            fontFamily: "Manrope_600SemiBold",
            fontSize: 18,
            lineHeight: 25,
            letterSpacing: 1,
            color: "#d0c5b5",
            opacity: taglineOpacity,
            textAlign: "center",
          }}
        >
          Luxury Living, Seamlessly Managed
        </Animated.Text>
      </View>
    </Animated.View>
  );
}
