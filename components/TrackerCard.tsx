import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

interface TrackerCardProps {
  icon: React.ElementType;
  progress: string;
  unit: string;
  onPress?: () => void;
  color: "blue" | "orange" | "violet";
}

const colors: {
  [key: string]: string;
} = {
  blue: "#3b82f6",
  violet: "#8b5cf6",
  orange: "#f97316",
};

const TrackerCard = ({
  icon: Icon,
  onPress,
  unit,
  color,
  progress,
}: TrackerCardProps) => {
  return (
    <ThemedView className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl flex-1 mr-3 items-center shadow-sm">
      <ThemedView className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mb-2">
        <Icon size={28} color={colors[color]}  />
      </ThemedView>
      <ThemedText className="text-2xl font-extrabold mt-2">
        {progress}
      </ThemedText>
      <ThemedText className="text-gray-500 dark:text-gray-400 text-sm">
        {unit}
      </ThemedText>
    </ThemedView>
  );
};

export default TrackerCard;
