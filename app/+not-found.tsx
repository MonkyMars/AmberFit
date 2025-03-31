import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { FaSadTear, FaHome } from "react-icons/fa";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import Title from "@/components/Title";

export default function NotFoundScreen() {
  const colorScheme = useColorScheme();
  const themedViewStyling =
    "px-6 py-10 items-center bg-amber-50 dark:bg-amber-900/20 rounded-3xl mx-4 mt-4 shadow-sm";

  return (
    <>
      <Stack.Screen options={{ title: "Page Not Found", headerShown: false }} />
      <ThemedView className="flex-1 p-4">
        <ThemedView className={themedViewStyling}>
          <ThemedView className="bg-amber-100 dark:bg-amber-800/40 p-3 rounded-full mb-4">
            <FaSadTear
              size={36}
              color={colorScheme === "dark" ? "#fbbf24" : "#f59e0b"}
            />
          </ThemedView>

          <ThemedText className="flex items-center justify-center gap-x-1 uppercase text-4xl font-extrabold text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-200">
            Oops! Page Not Found
          </ThemedText>

          <ThemedText className="text-lg text-center mt-3 text-gray-600 dark:text-gray-300 px-6 leading-relaxed">
            We couldn't find the page you were looking for. Let's get you back
            on track!
          </ThemedText>

          <Link href="/" asChild>
            <Pressable className="mt-8 bg-gradient-to-r from-amber-500 to-amber-400 py-4 px-8 rounded-full shadow-lg active:scale-95 transform transition-all duration-150">
              <ThemedText className="text-white font-extrabold text-lg flex flex-row items-center">
                <FaHome size={18} style={{ marginRight: 8 }} />
                Back to Home
              </ThemedText>
            </Pressable>
          </Link>
        </ThemedView>
      </ThemedView>
    </>
  );
}
