import { ScrollView, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView className="flex-1">
      {/* Hero Section */}
      <ThemedView className="px-4 py-6 items-center">
        
        <ThemedText className="text-3xl font-bold text-center">
          Welcome to AmberFit
        </ThemedText>
        <ThemedText className="text-lg text-center mt-2 text-gray-500 dark:text-gray-400 px-4">
          Your personal training assistant for a healthier lifestyle
        </ThemedText>
        <Pressable 
          className="mt-6 bg-amber-500 py-3 px-6 rounded-full"
          onPress={() => console.log('Get started')}
        >
          <ThemedText className="text-white font-bold">GET STARTED</ThemedText>
        </Pressable>
      </ThemedView>

      {/* Stats Summary Section */}
      <ThemedView className="px-4 py-6 mt-4">
        <ThemedText className="text-xl font-bold mb-4">Today's Progress</ThemedText>
        <ThemedView className="flex-row justify-between">
          <ThemedView className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl flex-1 mr-2 items-center">
            <Ionicons name="flame" size={24} color="#f59e0b" />
            <ThemedText className="text-2xl font-bold mt-2">345</ThemedText>
            <ThemedText className="text-gray-500 dark:text-gray-400">Calories</ThemedText>
          </ThemedView>
          <ThemedView className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl flex-1 mx-2 items-center">
            <Ionicons name="footsteps" size={24} color="#60a5fa" />
            <ThemedText className="text-2xl font-bold mt-2">5,620</ThemedText>
            <ThemedText className="text-gray-500 dark:text-gray-400">Steps</ThemedText>
          </ThemedView>
          <ThemedView className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl flex-1 ml-2 items-center">
            <Ionicons name="time" size={24} color="#34d399" />
            <ThemedText className="text-2xl font-bold mt-2">32</ThemedText>
            <ThemedText className="text-gray-500 dark:text-gray-400">Minutes</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* Workouts Section */}
      <ThemedView className="px-4 py-6 mt-2">
        <ThemedView className="flex-row justify-between items-center mb-4">
          <ThemedText className="text-xl font-bold">Featured Workouts</ThemedText>
          <Link href="/" asChild>
            <Pressable>
              <ThemedText className="text-amber-500">See All</ThemedText>
            </Pressable>
          </Link>
        </ThemedView>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-2">
          {[
            { title: "Full Body HIIT", duration: "25 min", level: "Medium" },
            { title: "Core Strength", duration: "15 min", level: "Easy" },
            { title: "Upper Body", duration: "30 min", level: "Hard" },
          ].map((workout, index) => (
            <Pressable key={index} className="mr-4">
              <ThemedView className="w-44 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <ThemedView className="p-3">
                  <ThemedText className="font-bold">{workout.title}</ThemedText>
                  <ThemedView className="flex-row items-center justify-between mt-1">
                    <ThemedText className="text-gray-500 dark:text-gray-400 text-xs">{workout.duration}</ThemedText>
                    <ThemedView className={`px-2 py-1 rounded-full ${
                      workout.level === "Easy" ? "bg-green-100 dark:bg-green-900" : 
                      workout.level === "Medium" ? "bg-yellow-100 dark:bg-yellow-900" : 
                      "bg-red-100 dark:bg-red-900"
                    }`}>
                      <ThemedText className={`text-xs ${
                        workout.level === "Easy" ? "text-green-800 dark:text-green-200" : 
                        workout.level === "Medium" ? "text-yellow-800 dark:text-yellow-200" : 
                        "text-red-800 dark:text-red-200"
                      }`}>{workout.level}</ThemedText>
                    </ThemedView>
                  </ThemedView>
                </ThemedView>
              </ThemedView>
            </Pressable>
          ))}
        </ScrollView>
      </ThemedView>

      {/* Health Tips Section */}
      <ThemedView className="px-4 py-6 mt-2">
        <ThemedText className="text-xl font-bold mb-4">Health Tips</ThemedText>
        <ThemedView className="bg-amber-50 dark:bg-amber-900 p-4 rounded-xl mb-4">
          <ThemedView className="flex-row items-center mb-2">
            <Ionicons name="water" size={20} color={colorScheme === 'dark' ? '#fbbf24' : '#f59e0b'} />
            <ThemedText className="font-bold ml-2">Stay Hydrated</ThemedText>
          </ThemedView>
          <ThemedText className="text-gray-600 dark:text-gray-300">
            Remember to drink at least 8 glasses of water each day to stay properly hydrated during your workouts.
          </ThemedText>
        </ThemedView>
        <ThemedView className="bg-blue-50 dark:bg-blue-900 p-4 rounded-xl">
          <ThemedView className="flex-row items-center mb-2">
            <Ionicons name="bed" size={20} color={colorScheme === 'dark' ? '#93c5fd' : '#3b82f6'} />
            <ThemedText className="font-bold ml-2">Rest Day Importance</ThemedText>
          </ThemedView>
          <ThemedText className="text-gray-600 dark:text-gray-300">
            Taking rest days is essential for muscle recovery and growth. Aim for at least 1-2 rest days per week.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Programs Section */}
      <ThemedView className="px-4 py-6 mt-2">
        <ThemedText className="text-xl font-bold mb-4">Training Programs</ThemedText>
        
        {[
          { title: "30-Day Shred", weeks: "4 weeks", description: "Full body transformation program", color: "bg-purple-100 dark:bg-purple-900" },
          { title: "Couch to 5K", weeks: "8 weeks", description: "Running program for beginners", color: "bg-green-100 dark:bg-green-900" },
          { title: "Strength Mastery", weeks: "12 weeks", description: "Progressive strength building", color: "bg-blue-100 dark:bg-blue-900" },
        ].map((program, index) => (
          <Pressable key={index} className="mb-3">
            <ThemedView className={`p-4 rounded-xl ${program.color}`}>
              <ThemedText className="font-bold text-lg">{program.title}</ThemedText>
              <ThemedText className="text-gray-600 dark:text-gray-300">{program.description}</ThemedText>
              <ThemedView className="flex-row justify-between items-center mt-2">
                <ThemedText className="text-gray-500 dark:text-gray-400">{program.weeks}</ThemedText>
                <Ionicons name="chevron-forward" size={20} color={colorScheme === 'dark' ? '#e5e7eb' : '#4b5563'} />
              </ThemedView>
            </ThemedView>
          </Pressable>
        ))}
      </ThemedView>

      {/* Community Section */}
      <ThemedView className="px-4 py-6 mt-2 mb-8">
        <ThemedText className="text-xl font-bold mb-4">Join Our Community</ThemedText>
        <ThemedView className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl items-center">
          <Ionicons name="people" size={40} color={colorScheme === 'dark' ? '#fbbf24' : '#f59e0b'} />
          <ThemedText className="text-center mt-3 font-bold">Connect with like-minded fitness enthusiasts</ThemedText>
          <ThemedText className="text-center mt-1 text-gray-500 dark:text-gray-400 mb-4">
            Share your progress, join challenges, and stay motivated together
          </ThemedText>
          <Pressable 
            className="bg-amber-500 py-3 px-6 rounded-full"
            onPress={() => console.log('Join community')}
          >
            <ThemedText className="text-white font-bold">JOIN NOW</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}