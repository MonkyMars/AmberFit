import React from "react";
import { useColorScheme, Pressable } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import tw from "twrnc";

interface TrackerCardProps {
  icon: React.ElementType;
  progress: string;
  unit: string;
  onPress?: () => void;
  color: "blue" | "orange" | "violet";
}

const colors = {
  blue: { light: "#3b82f6", dark: "#60a5fa", bg: { light: "#eff6ff", dark: "#1e3a8a" } },
  violet: { light: "#8b5cf6", dark: "#a78bfa", bg: { light: "#f5f3ff", dark: "#2e1065" } },
  orange: { light: "#f97316", dark: "#fb923c", bg: { light: "#fff7ed", dark: "#7c2d12" } },
};

const TrackerCard = ({
  icon: Icon,
  onPress,
  unit,
  color,
  progress,
}: TrackerCardProps) => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";
  const iconColor = isDark ? colors[color].dark : colors[color].light;
  const bgColor = isDark ? colors[color].bg.dark : colors[color].bg.light;

  const CardContent = () => (
    <ThemedView style={tw`p-5 rounded-3xl flex-1 items-center shadow-lg`}>
      <ThemedView style={tw`p-4 rounded-2xl mb-3 ${isDark ? 'bg-white/10' : 'bg-white/50'}`}>
        <Icon size={32} color={iconColor} />
      </ThemedView>
      <ThemedText style={tw`text-3xl font-bold my-1`}>
        {progress}
      </ThemedText>
      <ThemedText style={tw`text-sm font-medium opacity-80`}>
        {unit}
      </ThemedText>
    </ThemedView>
  );

  if (onPress) {
    return (
      <Pressable 
        onPress={onPress}
        style={tw`flex-1 mx-1.5`}
      >
        <CardContent />
      </Pressable>
    );
  }

  return (
    <ThemedView style={tw`flex-1 mx-1.5`}>
      <CardContent />
    </ThemedView>
  );
};

export default TrackerCard;
