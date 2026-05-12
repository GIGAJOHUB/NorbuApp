import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Colors } from "@/constants/colors";

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

export default function AIConciergeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef<FlatList>(null);

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
          <Pressable onPress={() => router.back()} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
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
                  backgroundColor: item.isUser ? Colors.primary : Colors.surfaceContainerHigh,
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
          paddingBottom: Math.max(insets.bottom, 16),
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
