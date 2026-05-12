import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { ScreenContainer } from "@/components/layout/ScreenContainer";
import { GoldButton } from "@/components/ui/GoldButton";
import { Colors } from "@/constants/colors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

/**
 * Concierge Services Screen
 * Combines the Stitch "Concierge Services" bento layout with "AI Concierge Chat"
 * - Services section (bento cards with background images)
 * - AI Chat interface at the bottom
 */

// Service Card Data
interface ServiceCardData {
  id: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
  imageUri: string;
  isFullWidth?: boolean;
}

const SERVICES: ServiceCardData[] = [
  {
    id: "fleet",
    icon: "directions-car",
    title: "Private Fleet & Chauffeur",
    description:
      "Command the city in absolute comfort. From airport transfers to on-call Rolls Royce Phantoms.",
    cta: "REQUEST VEHICLE",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBE4UYAatf7LtMw6GTAY4MQOsdmrceUzj1MfuT_HMJOb4AAHsUdneyfYP65renElD7xa74hdeo7A3mpkb69dTURyVVo4zf6Ej2tuR4I74pFPTn1c6knH0Xe4GhKr67V65lIqBPOl4P_2DcrWxl5Tv_uBolbfNd9HZwxpewXr3Zmxct0LPQUS1pN5AhWgE_zRvnv9TqyklE4lUVQxkQ-SoOZjwOD1wvUQcnIl_QQiOkMoi12FWJF03jaYtQ5z5D7YMoFyoL0eMBTchs",
  },
  {
    id: "dining",
    icon: "restaurant",
    title: "Culinary Access",
    description:
      "Priority reservations at the world's most sought-after dining rooms.",
    cta: "BOOK TABLE",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDispjYZtsrD_fveBzV34aI4Rc93Z4FalZu43Gzrc1cnBD2qbkWH0DtrNi6eUqF6xobnpHF9l8vQ2KicTjdSlltEPCf5iK82zOn_oCLIIGy5KmGfDnos-yjJBRHwb_WFafXW9VvnY2FIS_KoZVHp7VrGRa5pz_5PG2HXaC6QkJMhM_gpHEkGrS87fWvjZ-5EsfzbJL5SwswYVGdKZJZF4k0FjUDaFZ-FPkVclVv3OmLnQQOgk17jen9-_0n2M9Apr1gj_yExjYTn2s",
  },
  {
    id: "vip",
    icon: "star",
    title: "VIP Experiences",
    description:
      "From red carpet premieres to private yacht charters. The impossible, curated for you.",
    cta: "DISCOVER MORE",
    imageUri:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6OD6RSLRAweDgiYnWMDGO6xnJtmcKYxws1JC6gx54b7CVZj_A0HWIZjsc2gIaCwrgt6QVQ5Ce-pD3nkYNFSizvboND3CInr08paxzDe77Ft4ewmFdoiRZGu0LMWSD0iQslA2NRJDWlt6Xbj5MOnwP8s9d9-XwIN9hp9fywnHj-zJFq7-gYUhiqBKhjqNjIY939880YeoK0Dqv2nNGi9dF7JV5zS3ytVn41PgyxGELSUT7grgnXYhEA9G1G5XjymjJ_U9bwtK2UOY",
    isFullWidth: true,
  },
];

// Chat Messages
interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp?: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome",
    text: "Welcome to Norbu Homes AI Concierge. I'm here to help you with anything during your stay — dining reservations, transportation, housekeeping, and more. How may I assist you today?",
    isUser: false,
  },
];

export default function ConciergeScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [showUnderDev, setShowUnderDev] = useState(false);
  const insets = useSafeAreaInsets();

  const sendMessage = useCallback(() => {
    if (!inputText.trim()) return;
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: "Just now",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // AI auto-reply: under development
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Thank you for your message. The Norbu Homes app is currently under development. Our full AI concierge service will be available soon. In the meantime, please contact our front desk for any immediate assistance.",
          isUser: false,
        },
      ]);
    }, 1200);
  }, [inputText]);

  const showUnderDevModal = () => setShowUnderDev(true);

  if (showChat) {
    return (
      <ChatView
        messages={messages}
        inputText={inputText}
        setInputText={setInputText}
        sendMessage={sendMessage}
        onBack={() => setShowChat(false)}
      />
    );
  }

  return (
    <ScreenContainer>
      <View style={{ paddingHorizontal: 24 }}>
        {/* Section Header */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={{ marginBottom: 32 }}>
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
            AT YOUR SERVICE
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
            {"Bespoke\nLifestyle"}
          </Text>
          <Text
            style={{
              fontFamily: "Manrope_400Regular",
              fontSize: 16,
              lineHeight: 25.6,
              color: Colors.onSurfaceVariant,
              marginTop: 8,
            }}
          >
            Curated experiences and unparalleled access, designed exclusively for
            the modern elite.
          </Text>
        </Animated.View>

        {/* Service Cards */}
        {SERVICES.map((service, index) => (
          <Animated.View
            key={service.id}
            entering={FadeInDown.delay(200 + index * 100).duration(600)}
            style={{ marginBottom: 16 }}
          >
            <ServiceCard data={service} onPress={showUnderDevModal} />
          </Animated.View>
        ))}

        {/* AI Concierge CTA */}
        <Animated.View entering={FadeInDown.delay(600).duration(600)} style={{ marginTop: 16, marginBottom: 16 }}>
          <Pressable
            onPress={() => setShowChat(true)}
            style={({ pressed }) => ({
              borderRadius: 16,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: pressed ? "rgba(229, 196, 132, 0.4)" : "rgba(229, 196, 132, 0.2)",
              opacity: pressed ? 0.95 : 1,
            })}
          >
            <BlurView intensity={30} tint="dark" style={{ padding: 24 }}>
              {/* Glow effect */}
              <View
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  backgroundColor: "rgba(229, 196, 132, 0.1)",
                }}
              />
              <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 16 }}>
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: Colors.primary,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons name="auto-awesome" size={24} color={Colors.onPrimary} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "PlayfairDisplay_500Medium",
                      fontSize: 22,
                      color: Colors.onSurface,
                      marginBottom: 8,
                    }}
                  >
                    AI Concierge
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Manrope_400Regular",
                      fontSize: 14,
                      lineHeight: 22,
                      color: Colors.onSurfaceVariant,
                    }}
                  >
                    Your personal attaché is available 24/7 to assist with
                    dining, transport, or special requests.
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 16 }}>
                <GoldButton title="Start Conversation" variant="outlined" fullWidth onPress={() => setShowChat(true)} />
              </View>
            </BlurView>
          </Pressable>
        </Animated.View>
      </View>

      {/* Under Development Modal */}
      <UnderDevModal visible={showUnderDev} onClose={() => setShowUnderDev(false)} />
    </ScreenContainer>
  );
}

/* Under Development Modal (shared) */
function UnderDevModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
          padding: 32,
        }}
        onPress={onClose}
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
          <GoldButton title="Dismiss" onPress={onClose} fullWidth />
        </View>
      </Pressable>
    </Modal>
  );
}

/* Service Card */
function ServiceCard({ data, onPress }: { data: ServiceCardData; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        width: "100%",
        height: data.isFullWidth ? 280 : 340,
        borderRadius: 16,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <Image
        source={{ uri: data.imageUri }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        contentFit="cover"
      />
      <LinearGradient
        colors={["transparent", "rgba(11,11,13,0.8)", "#0B0B0D"]}
        locations={[0, 0.5, 1]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
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
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(22,19,15,0.5)",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <MaterialIcons name={data.icon as any} size={20} color={Colors.primary} />
        </View>
        <Text
          style={{
            fontFamily: "Manrope_600SemiBold",
            fontSize: 20,
            color: Colors.onSurface,
            marginBottom: 4,
          }}
        >
          {data.title}
        </Text>
        <Text
          style={{
            fontFamily: "Manrope_400Regular",
            fontSize: 14,
            lineHeight: 22,
            color: Colors.onSurfaceVariant,
          }}
          numberOfLines={2}
        >
          {data.description}
        </Text>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => ({
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginTop: 16,
            opacity: pressed ? 0.7 : 1,
          })}
        >
          <Text
            style={{
              fontFamily: "Manrope_700Bold",
              fontSize: 12,
              letterSpacing: 1.2,
              color: Colors.primary,
            }}
          >
            {data.cta}
          </Text>
          <MaterialIcons name="arrow-forward" size={14} color={Colors.primary} />
        </Pressable>
      </View>
    </Pressable>
  );
}

/* Chat View */
function ChatView({
  messages,
  inputText,
  setInputText,
  sendMessage,
  onBack,
}: {
  messages: ChatMessage[];
  inputText: string;
  setInputText: (t: string) => void;
  sendMessage: () => void;
  onBack: () => void;
}) {
  const insets = useSafeAreaInsets();
  const flatListRef = useRef<FlatList>(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      {/* Header */}
      <View
        style={{
          paddingTop: insets.top,
          backgroundColor: Colors.surface,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(255,255,255,0.05)",
        }}
      >
        <View
          style={{
            height: 56,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 24,
            gap: 16,
          }}
        >
          <Pressable
            onPress={onBack}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <MaterialIcons name="arrow-back" size={24} color={Colors.primary} />
          </Pressable>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "PlayfairDisplay_500Medium",
                fontSize: 18,
                letterSpacing: 4,
                color: Colors.primary,
              }}
            >
              AI CONCIERGE
            </Text>
          </View>
          <View style={{ width: 24 }} />
        </View>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 24, gap: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        ListHeaderComponent={
          <Animated.View
            entering={FadeInDown.duration(600)}
            style={{ alignItems: "center", marginBottom: 24 }}
          >
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: Colors.surfaceContainerHigh,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.05)",
                marginBottom: 16,
              }}
            >
              <MaterialIcons name="auto-awesome" size={28} color={Colors.primary} />
            </View>
            <Text
              style={{
                fontFamily: "PlayfairDisplay_500Medium",
                fontSize: 24,
                color: Colors.onSurface,
                marginBottom: 8,
              }}
            >
              How may I assist you?
            </Text>
            <Text
              style={{
                fontFamily: "Manrope_400Regular",
                fontSize: 14,
                color: Colors.onSurfaceVariant,
                textAlign: "center",
                maxWidth: 280,
              }}
            >
              Your personal AI concierge, dedicated to elevating your experience.
            </Text>
          </Animated.View>
        }
        renderItem={({ item }) => (
          <View
            style={{
              alignSelf: item.isUser ? "flex-end" : "flex-start",
              maxWidth: "80%",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: 8,
            }}
          >
            {!item.isUser && (
              <View
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  backgroundColor: Colors.surfaceContainerHigh,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <MaterialIcons name="auto-awesome" size={14} color={Colors.primary} />
              </View>
            )}
            <View>
              <View
                style={{
                  backgroundColor: item.isUser
                    ? Colors.primary
                    : Colors.surfaceContainerHigh,
                  borderRadius: 18,
                  borderBottomRightRadius: item.isUser ? 4 : 18,
                  borderBottomLeftRadius: item.isUser ? 18 : 4,
                  padding: 16,
                  borderWidth: item.isUser ? 0 : 1,
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Manrope_400Regular",
                    fontSize: 14,
                    lineHeight: 22,
                    color: item.isUser ? Colors.onPrimary : Colors.onSurface,
                  }}
                >
                  {item.text}
                </Text>
              </View>
              {item.timestamp && (
                <Text
                  style={{
                    fontFamily: "Manrope_700Bold",
                    fontSize: 10,
                    letterSpacing: 1,
                    color: Colors.outline,
                    marginTop: 4,
                    textAlign: item.isUser ? "right" : "left",
                  }}
                >
                  {item.timestamp}
                </Text>
              )}
            </View>
          </View>
        )}
      />

      {/* Input Area */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: Math.max(insets.bottom, 16) + 80,
          paddingTop: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 8,
            backgroundColor: Colors.surfaceContainerHigh,
            borderRadius: 28,
            padding: 8,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask for anything..."
            placeholderTextColor={Colors.outline}
            multiline
            style={{
              flex: 1,
              fontFamily: "Manrope_400Regular",
              fontSize: 14,
              color: Colors.onSurface,
              maxHeight: 100,
              paddingVertical: 12,
              paddingHorizontal: 12,
            }}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <Pressable
            onPress={sendMessage}
            style={({ pressed }) => ({
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: pressed ? Colors.primaryFixed : Colors.primary,
              alignItems: "center",
              justifyContent: "center",
              opacity: inputText.trim() ? 1 : 0.5,
            })}
          >
            <MaterialIcons name="arrow-upward" size={22} color={Colors.onPrimary} />
          </Pressable>
        </View>
        <Text
          style={{
            fontFamily: "Manrope_700Bold",
            fontSize: 10,
            letterSpacing: 1,
            color: Colors.outline,
            opacity: 0.4,
            textAlign: "center",
            marginTop: 8,
            textTransform: "uppercase",
          }}
        >
          NORBU AI can make mistakes. Please verify details.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
