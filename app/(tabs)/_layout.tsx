import { Tabs } from "expo-router";
import { FaHome, FaBicycle, FaClipboardCheck } from "react-icons/fa";
import { useColorScheme } from "react-native";
import tw from "twrnc";

export default function Layout() {
  const isDark = useColorScheme() === "dark";

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: tw`${isDark ? "bg-black" : "bg-white"} h-auto shadow-lg border-t border-[rgba(255,255,255,0.2)] dark:border-gray-700`,
        tabBarActiveTintColor: "#f5a00d",
        tabBarInactiveTintColor: isDark ? "#9ca3af" : "#6b7280",
        tabBarLabelStyle: tw`text-sm font-semibold tracking-wide`,
        tabBarIconStyle: { marginBottom: -2 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FaHome size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="exercise"
        options={{
          title: "Exercise",
          tabBarIcon: ({ color }) => <FaBicycle size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="logs"
        options={{
          title: "Logs",
          tabBarIcon: ({ color }) => <FaClipboardCheck size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
