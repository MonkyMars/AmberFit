import React from "react";
import { View, Pressable, useColorScheme } from "react-native";
import tw from "twrnc"; // Import Tailwind for React Native
import { ThemedText } from "@/components/ThemedText";

interface LogCardProps {
  icon: React.ElementType;
  title: string;
  color?: "blue" | "cyan" | "violet";
  onPress?: () => void;
}

const colorStyles = {
  blue: {
    light: "bg-blue-400 text-blue-800",
    dark: "bg-blue-500 text-blue-200",
    icon: "#1E40AF",
  },
  violet: {
    light: "bg-violet-400 text-violet-800",
    dark: "bg-violet-500 text-violet-200",
    icon: "#6D28D9",
  },
  cyan: {
    light: "bg-cyan-400 text-cyan-800",
    dark: "bg-cyan-500 text-cyan-200",
    icon: "#0891B2",
  },
};

const LogCard = ({
  icon: Icon,
  title,
  onPress,
  color = "blue",
}: LogCardProps) => {
  const scheme = useColorScheme(); // Get system theme (light/dark)
  const themeColors = colorStyles[color] || colorStyles.blue;
  const bgColor = scheme === "dark" ? themeColors.dark : themeColors.light;
  const textColor = scheme === "dark" ? "text-white" : "text-black";

  return (
    <View style={tw`w-[300px] mx-3 h-[20em] flex-col items-center justify-between p-4 rounded-2xl shadow-sm ${bgColor}`}>
      <View style={tw`items-center justify-center`}>
        <View style={tw`bg-white/20 p-6 rounded-full mb-2`}>
          <Icon size={100} color={themeColors.icon} />
        </View>
      </View>
      <ThemedText style={tw`text-2xl font-bold ${textColor}`}>
        {title}
      </ThemedText>
      <Pressable
        style={tw`bg-white/20 font-bold py-2 px-4 rounded-full mt-4 shadow-md active:scale-95 transition-all duration-150 w-full flex items-center justify-center hover:-translate-y-0.5`}
        onPress={onPress}
      >
        <ThemedText style={tw`font-bold ${textColor}`}>Log Activity</ThemedText>
      </Pressable>
    </View>
  );
};

export default LogCard;
