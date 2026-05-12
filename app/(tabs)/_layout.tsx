import { Tabs } from "expo-router";
import { View, Text, Pressable, Platform } from "react-native";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";

type TabIconName = "home-work" | "room-service" | "explore" | "location-city" | "person";

const TAB_CONFIG: {
  name: string;
  title: string;
  icon: TabIconName;
  label: string;
}[] = [
  { name: "index", title: "Home", icon: "home-work", label: "Home" },
  { name: "concierge", title: "Concierge", icon: "room-service", label: "Concierge" },
  { name: "explore", title: "Explore", icon: "explore", label: "Explore" },
  { name: "properties", title: "Properties", icon: "location-city", label: "Properties" },
  { name: "profile", title: "Profile", icon: "person", label: "Profile" },
];

function CustomTabBar({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: Math.max(insets.bottom, 8),
      }}
    >
      <BlurView
        intensity={80}
        tint="dark"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: 12,
          paddingHorizontal: 8,
          borderTopWidth: 1,
          borderTopColor: "rgba(255,255,255,0.05)",
        }}
      >
        {state.routes.map((route: any, index: number) => {
          const config = TAB_CONFIG[index];
          if (!config) return null;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 6,
                transform: [{ scale: isFocused ? 1.1 : 1 }],
              }}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={config.label}
            >
              <MaterialIcons
                name={config.icon as any}
                size={24}
                color={isFocused ? Colors.primary : Colors.outline}
                style={{ opacity: isFocused ? 1 : 0.6, marginBottom: 4 }}
              />
              <Text
                style={{
                  fontFamily: "Manrope_700Bold",
                  fontSize: 10,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: isFocused ? Colors.primary : Colors.outline,
                  opacity: isFocused ? 1 : 0.6,
                }}
              >
                {config.label}
              </Text>
            </Pressable>
          );
        })}
      </BlurView>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="concierge" options={{ title: "Concierge" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="properties" options={{ title: "Properties" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
