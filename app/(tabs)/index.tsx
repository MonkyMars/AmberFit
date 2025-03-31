import { ScrollView, Pressable, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FaFire, FaClock, FaHeart, FaWalking, FaBicycle } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { RiFootprintFill } from "react-icons/ri";
import Title from "@/components/Title";
import LogCard from "@/components/LogCard";
import TrackerCard from "@/components/TrackerCard";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const themedViewStyling =
    "px-6 py-10 items-center rounded-3xl mx-4 mt-4 shadow-sm";
  return (
    <ScrollView className="flex-1">
      {/* Hero Section */}
      <ThemedView className={themedViewStyling}>
        <ThemedView className="p-3 rounded-full mb-4">
          <FaFire
            size={40}
            color={colorScheme === "dark" ? "#fbbf24" : "#f59e0b"}
          />
        </ThemedView>
        <Title
          title="Hai Amber!"
          icon={FaHeart}
          className="flex items-center justify-center gap-x-1 uppercase text-4xl font-extrabold text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-200"
        />
        <ThemedText className="text-lg text-center mt-3 text-gray-600 dark:text-gray-300 px-6 leading-relaxed">
          Ready for another amazing day of crushing your fitness goals?
        </ThemedText>
        <Pressable className="mt-8 bg-gradient-to-r from-amber-500 to-amber-400 py-4 px-8 rounded-full shadow-lg active:scale-95 transform transition-all duration-150">
          <ThemedText className="text-white font-extrabold text-lg">
            Let's Go, Amber! 🔥
          </ThemedText>
        </Pressable>
      </ThemedView>

      {/* Stats Summary Section */}
      <ThemedView className={themedViewStyling}>
        <Title
          title="Today's progress"
          icon={FaHeart}
          className="flex items-center justify-center gap-x-2 py-1 text-4xl font-extrabold text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-200"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
          className="flex-row mt-4 w-full h-full items-center justify-center"
          snapToInterval={350}
          contentContainerStyle={{ paddingRight: 50, paddingLeft: 50 }}
        >
          <TrackerCard
            icon={FaFire}
            progress="345"
            unit="Calories"
            color="orange"
          />
          <TrackerCard
            icon={RiFootprintFill}
            progress="12,345"
            unit="Steps"
            color="blue"
          />
          <TrackerCard
            icon={FaClock}
            progress="32"
            unit="Minutes"
            color="violet"
          />
        </ScrollView>
        <ThemedText className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Ps, Ik ben zo trots op je!
        </ThemedText>
      </ThemedView>

      {/* Log activity */}
      <ThemedView className={themedViewStyling}>
        <Title
          title="Log activity"
          icon={FaHeart}
          className="flex items-center justify-center gap-x-2 py-1 text-4xl font-extrabold text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-200"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate="fast"
          className="flex-row mt-4 w-full h-full"
          contentContainerStyle={{ paddingRight: 20, paddingLeft: 20 }}
        >
          <LogCard icon={FaBicycle} title="Biking" color="blue" />
          <LogCard icon={FaBowlFood} title="Calories" color="cyan" />
          <LogCard icon={FaFire} title="Cycling" color="violet" />
        </ScrollView>
      </ThemedView>
    </ScrollView>
  );
}
