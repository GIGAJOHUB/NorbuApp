import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Dimensions, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";
import { ScreenContainer } from "@/components/layout/ScreenContainer";
import { GoldButton } from "@/components/ui/GoldButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Colors } from "@/constants/colors";

const { width: SW } = Dimensions.get("window");

const PROPERTIES = [
  { id: "1", type: "PENTHOUSE", name: "The Armani Sky Suite", price: "$18,500,000", beds: 4, baths: 5.5, sqft: "8,200", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDocGUb3O2X_W8i-itMGOKbgQIWWcN5CJZ4-OPWsCpsp6n8x2jqe8tJ0uyZdmhsegvqhNPTIMdCNQfegJ2rXPZ2Wc52z8yCFHuTeluIcv8DCnGuTdtL3Y3yeoOgYRHXRksYmIHd9NZgFK9EXVFIeiXI-b157S7yrWmOWCCLQGDK2pg6IFMP0-2TEQuO8SP4nTGFZB9XuGKpOcsNxZHXLfH7kNTpNiGZUd6AcgNqPgqtvuIPD0dMR-VFJFNGpolydS93crv_LiB1iPA" },
  { id: "2", type: "DUPLEX", name: "Opera District Residence", price: "$9,200,000", beds: 3, baths: 4, sqft: "4,500", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE4UYAatf7LtMw6GTAY4MQOsdmrceUzj1MfuT_HMJOb4AAHsUdneyfYP65renElD7xa74hdeo7A3mpkb69dTURyVVo4zf6Ej2tuR4I74pFPTn1c6knH0Xe4GhKr67V65lIqBPOl4P_2DcrWxl5Tv_uBolbfNd9HZwxpewXr3Zmxct0LPQUS1pN5AhWgE_zRvnv9TqyklE4lUVQxkQ-SoOZjwOD1wvUQcnIl_QQiOkMoi12FWJF03jaYtQ5z5D7YMoFyoL0eMBTchs" },
];

const CLEANING = [
  { id: "1", name: "Penthouse 4B, The Marina", detail: "Check-in at 15:00", status: "In Progress", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkKcuX11zyJJFUrvqQeWb4di4I7nIZXkfreygj0VGAsQw1Jnpu3YAB1wszRhDK2Tga1ReHgCtRYMABHgV7erzuBbCr79MzQNcxPrugdAO62uV4eNx_eVDeR5pDG5GSzcC3a5KYZviUdw0dEswp9WfUCZ1truztqDpdKGMVtRR-yqreS7O-zIgwTd3_186_halBTzJ263Y1VCQAnjLY0GL6ECEUymJ0BnrKg7kASR-_zHCugnsistZqAgYsk-97vCIC5JyJVvT5CRM" },
  { id: "2", name: "Villa 12, Palm Springs", detail: "Guest departing", status: "Pending", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYdLiyr3uosZ1BjVnlHnTSCXlVLRnz2bN16S5iXFW47ymt_B7JcKb12s3fB4k1TIrY7ZQVq6_O8GFFWqCab3wCbyc-KwufyWbnQJb43mgUs1_H-IL1QmQG5TZZcOHUPz8VDqS0IKqXLFfEGIWLlJy1Ug4olyR9U6fp5RYadVGNMB0pSR4uztadgqpKAppBgGzU6Jn3LeRJ9vi9UvG_W_e4sMEjn4QOEojn5zUpCX7pmwUrGaE38CAw0js0NjYLG9a44KGOB5czKAU" },
];

const KPIS = [
  { label: "MONTHLY EARNINGS", value: "$142,500", trend: "+12.4%", icon: "account-balance-wallet" },
  { label: "AVG OCCUPANCY", value: "84%", trend: "+3.2%", icon: "hotel" },
  { label: "TOTAL BOOKINGS", value: "28", trend: "Consistent", icon: "calendar-today", flat: true },
];

type TabKey = "featured" | "operations" | "insights";

export default function PropertiesScreen() {
  const [tab, setTab] = useState<TabKey>("featured");
  const [showUnderDev, setShowUnderDev] = useState(false);

  const showUnderDevModal = () => setShowUnderDev(true);

  return (
    <ScreenContainer>
      <View style={{ paddingHorizontal: 24 }}>
        {/* Header */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={{ marginBottom: 24 }}>
          <Text style={{ fontFamily: "PlayfairDisplay_600SemiBold", fontSize: 36, lineHeight: 40, letterSpacing: -0.8, color: Colors.onSurface }}>
            Properties
          </Text>
          <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 16, color: Colors.onSurfaceVariant, marginTop: 8 }}>
            Exclusive residences in Downtown Dubai
          </Text>
        </Animated.View>

        {/* Sub-tabs */}
        <Animated.View entering={FadeInDown.delay(150).duration(500)}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }} contentContainerStyle={{ gap: 8 }}>
            {(["featured", "operations", "insights"] as TabKey[]).map((t) => (
              <Pressable key={t} onPress={() => setTab(t)} style={{ paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, backgroundColor: tab === t ? Colors.primary : Colors.surfaceContainer, borderWidth: 1, borderColor: tab === t ? Colors.primary : "rgba(255,255,255,0.05)" }}>
                <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: tab === t ? Colors.onPrimary : Colors.onSurfaceVariant }}>
                  {t === "featured" ? "Featured" : t === "operations" ? "Operations" : "Owner Insights"}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </Animated.View>

        {tab === "featured" && <FeaturedTab onPress={showUnderDevModal} />}
        {tab === "operations" && <OperationsTab onPress={showUnderDevModal} />}
        {tab === "insights" && <InsightsTab onPress={showUnderDevModal} />}
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

function FeaturedTab({ onPress }: { onPress: () => void }) {
  return (
    <View style={{ gap: 24 }}>
      {PROPERTIES.map((p, i) => (
        <Animated.View key={p.id} entering={FadeInDown.delay(200 + i * 100).duration(600)}>
          <Pressable onPress={onPress} style={({pressed}) => ({ width: "100%", aspectRatio: 4 / 5, borderRadius: 16, overflow: "hidden", borderWidth: 1, borderColor: "rgba(255,255,255,0.05)", opacity: pressed ? 0.9 : 1 })}>
            <Image source={{ uri: p.image }} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} contentFit="cover" />
            <LinearGradient colors={["transparent", "rgba(11,11,13,0.4)", "#0B0B0D"]} locations={[0, 0.5, 1]} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} />
            <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12 }}>
                <View>
                  <View style={{ backgroundColor: "rgba(56,52,47,0.8)", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 4, alignSelf: "flex-start", marginBottom: 8, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)" }}>
                    <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1.2, color: Colors.primary }}>{p.type}</Text>
                  </View>
                  <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 20, color: Colors.onSurface }}>{p.name}</Text>
                </View>
                <Text style={{ fontFamily: "PlayfairDisplay_500Medium", fontSize: 22, color: Colors.primary }}>{p.price}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 16, borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.1)", paddingTop: 12 }}>
                <DetailChip icon="bed" text={`${p.beds} Beds`} />
                <DetailChip icon="bathtub" text={`${p.baths} Baths`} />
                <DetailChip icon="square-foot" text={`${p.sqft} sqft`} />
              </View>
            </View>
          </Pressable>
        </Animated.View>
      ))}
    </View>
  );
}

function DetailChip({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      <MaterialIcons name={icon as any} size={16} color={Colors.onSurfaceVariant} />
      <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, color: Colors.onSurfaceVariant }}>{text}</Text>
    </View>
  );
}

function OperationsTab({ onPress }: { onPress: () => void }) {
  return (
    <View style={{ gap: 24 }}>
      {/* Revenue + Occupancy */}
      <Animated.View entering={FadeInDown.delay(200).duration(600)}>
        <Pressable onPress={onPress} style={({pressed}) => ({ backgroundColor: Colors.surfaceContainer, borderRadius: 16, padding: 24, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)", opacity: pressed ? 0.9 : 1 })}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <MaterialIcons name="account-balance-wallet" size={16} color={Colors.outline} />
            <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1.2, color: Colors.outline, textTransform: "uppercase" }}>Total Revenue</Text>
          </View>
          <Text style={{ fontFamily: "PlayfairDisplay_600SemiBold", fontSize: 36, color: Colors.onSurface, marginBottom: 4 }}>$1.24M</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <MaterialIcons name="trending-up" size={16} color={Colors.primary} />
            <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, color: Colors.primary }}>+12.4% vs last month</Text>
          </View>
          {/* Mini bar chart */}
          <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, height: 80, marginTop: 24 }}>
            {[30, 45, 25, 60, 80, 100].map((h, i) => (
              <View key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i === 5 ? "rgba(229,196,132,0.3)" : Colors.surface, borderTopLeftRadius: 2, borderTopRightRadius: 2, borderWidth: 1, borderColor: i === 5 ? "rgba(229,196,132,0.3)" : "rgba(255,255,255,0.05)" }} />
            ))}
          </View>
        </Pressable>
      </Animated.View>

      {/* Occupancy Ring */}
      <Animated.View entering={FadeInDown.delay(300).duration(600)}>
        <Pressable onPress={onPress} style={({pressed}) => ({ backgroundColor: Colors.surfaceContainer, borderRadius: 16, padding: 24, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)", alignItems: "center", opacity: pressed ? 0.9 : 1 })}>
          <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1.2, color: Colors.outline, textTransform: "uppercase", alignSelf: "flex-start", marginBottom: 16 }}>OCCUPANCY</Text>
          <View style={{ width: 120, height: 120, borderRadius: 60, borderWidth: 4, borderColor: Colors.primary, alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
            <Text style={{ fontFamily: "PlayfairDisplay_600SemiBold", fontSize: 32, color: Colors.onSurface }}>84<Text style={{ fontSize: 18, color: Colors.outline }}>%</Text></Text>
          </View>
          <View style={{ flexDirection: "row", gap: 32 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1, color: Colors.outline, textTransform: "uppercase" }}>Booked</Text>
              <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 20, color: Colors.onSurface }}>42</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1, color: Colors.outline, textTransform: "uppercase" }}>Available</Text>
              <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 20, color: Colors.onSurface }}>8</Text>
            </View>
          </View>
        </Pressable>
      </Animated.View>

      {/* Cleaning Status */}
      <Animated.View entering={FadeInDown.delay(400).duration(600)}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.05)", paddingBottom: 12, marginBottom: 16 }}>
          <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 20, color: Colors.onSurface }}>Live Cleaning Status</Text>
          <Pressable onPress={onPress}>
            <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1.2, color: Colors.primary }}>VIEW ALL</Text>
          </Pressable>
        </View>
        {CLEANING.map((c) => (
          <Pressable onPress={onPress} key={c.id} style={({pressed}) => ({ backgroundColor: pressed ? Colors.surfaceContainer : Colors.surfaceContainerHigh, borderRadius: 12, padding: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 })}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1 }}>
              <View style={{ width: 48, height: 48, borderRadius: 8, overflow: "hidden", borderWidth: 1, borderColor: "rgba(255,255,255,0.05)" }}>
                <Image source={{ uri: c.image }} style={{ width: 48, height: 48 }} contentFit="cover" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 15, color: Colors.onSurface }} numberOfLines={1}>{c.name}</Text>
                <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 12, color: Colors.onSurfaceVariant }}>{c.detail}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <StatusBadge label={c.status} variant={c.status === "In Progress" ? "active" : "pending"} />
              <MaterialIcons name="chevron-right" size={20} color={Colors.outline} />
            </View>
          </Pressable>
        ))}
      </Animated.View>
    </View>
  );
}

function InsightsTab({ onPress }: { onPress: () => void }) {
  return (
    <View style={{ gap: 16 }}>
      <Animated.View entering={FadeInDown.delay(100).duration(600)} style={{ alignItems: "center", marginBottom: 16 }}>
        <Text style={{ fontFamily: "PlayfairDisplay_600SemiBold", fontSize: 32, color: Colors.onSurface, textAlign: "center" }}>Portfolio Performance</Text>
        <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 16, color: Colors.onSurfaceVariant, marginTop: 8, textAlign: "center" }}>Analytics and insights for your exclusive properties.</Text>
      </Animated.View>

      {/* KPI Cards */}
      {KPIS.map((kpi, i) => (
        <Animated.View key={kpi.label} entering={FadeInDown.delay(200 + i * 100).duration(600)}>
          <Pressable onPress={onPress} style={({pressed}) => ({ backgroundColor: Colors.surfaceContainerLow, borderRadius: 16, padding: 24, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)", opacity: pressed ? 0.8 : 1 })}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
              <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 12, letterSpacing: 1.2, color: Colors.onSurfaceVariant, textTransform: "uppercase" }}>{kpi.label}</Text>
              <MaterialIcons name={kpi.icon as any} size={22} color="rgba(229,196,132,0.7)" />
            </View>
            <Text style={{ fontFamily: "PlayfairDisplay_500Medium", fontSize: 32, color: Colors.onSurface, marginBottom: 8 }}>{kpi.value}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <MaterialIcons name={kpi.flat ? "trending-flat" : "trending-up"} size={16} color={kpi.flat ? Colors.outline : Colors.primary} />
              <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, color: kpi.flat ? Colors.onSurfaceVariant : Colors.primary }}>{kpi.trend}{!kpi.flat ? " vs last month" : " with last month"}</Text>
            </View>
          </Pressable>
        </Animated.View>
      ))}

      {/* Top Performer */}
      <Animated.View entering={FadeInDown.delay(600).duration(600)}>
        <Pressable onPress={onPress} style={({pressed}) => ({ width: "100%", height: 340, borderRadius: 16, overflow: "hidden", borderWidth: 1, borderColor: "rgba(255,255,255,0.05)", opacity: pressed ? 0.9 : 1 })}>
          <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQ-jhud8_iyfARsqfkCUytMcsD3J1uda52xbiKRi-1YHnft7gXv3P0mlhiO0V3jCVmBuNqpu7nkQPGoZXPIRo3BQwSUnENXeT8bYXDTlLjPSiVgmQeUDhfibsJ-3TjGghG0lyKA_UvWbOYjCrzlAefr2PQWVhpKN3wT6v8yCBWOprkiveWoqkTVeWBug7WfUaftTzcume13Bnjo3y8jdTDV1hFutM07SOwDasbSAdUR9co8ru3_mGJ0rcu9eeZ6qP0QRBN67Zvq0" }} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.6 }} contentFit="cover" />
          <LinearGradient colors={["transparent", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.95)"]} locations={[0, 0.4, 1]} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} />
          <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24 }}>
            <StatusBadge label="TOP PERFORMER" variant="active" />
            <Text style={{ fontFamily: "PlayfairDisplay_500Medium", fontSize: 24, color: Colors.onSurface, marginTop: 12, marginBottom: 4 }}>The Azure Villa</Text>
            <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14, color: Colors.onSurfaceVariant }}>Dubai Marina</Text>
            <Text style={{ fontFamily: "Manrope_600SemiBold", fontSize: 20, color: Colors.primary, marginTop: 8 }}>$68,000 <Text style={{ fontSize: 12, color: Colors.outline }}>this month</Text></Text>
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
}
