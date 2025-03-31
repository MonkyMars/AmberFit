import React from "react";
import { View, Pressable } from "react-native"; 
import { ThemedText } from "@/components/ThemedText";

interface LogCardProps {
  icon: React.ElementType;
  title: string;
  color?: "blue" | "cyan" | "violet";
  onPress?: () => void;
};

const colors: {
  [key: string]: string;
} = {
  blue: "bg-blue-400 dark:bg-blue-500, text-blue-800 dark:text-blue-200",
  violet: "bg-violet-400 dark:bg-violet-500, text-violet-800 dark:text-violet-200",
  cyan: "bg-cyan-400 dark:bg-cyan-500 text-cyan-800 dark:text-cyan-200",
};

const LogCard = ({
  icon: Icon,
  title,
  onPress,
  color = "blue",
}: LogCardProps) => {
  return (
    <View className={`w-[300px] mx-3 h-[20em] flex-col items-center justify-between p-4 ${colors[color] || colors.blue} rounded-2xl shadow-sm`}>
      <View className="items-center justify-center">
        <View className={`bg-white/20 p-6 rounded-full mb-2`}>
          <Icon size={100} color={colors[color]} />
        </View>
      </View>
      <ThemedText className={"text-2xl font-bold text-gray-800 dark:text-gray-200"}>
        {title}
      </ThemedText>
      <Pressable
        className={`text-white font-bold py-2 px-4 rounded-full mt-4 shadow-md active:scale-95 transform transition-all duration-150 w-full flex items-center justify-center hover:-translate-y-0.5`}
        onPress={onPress}
      >
        <ThemedText className="font-bold">Log Activity</ThemedText>
      </Pressable>
    </View>
  );
};

export default LogCard;