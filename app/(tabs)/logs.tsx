import React, { useEffect, useState } from 'react';
import { ScrollView, View, useColorScheme } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import tw from 'twrnc';
import { LogEntry, getLogs, clearLogs } from '@/utils/logging';

export default function LogsScreen() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    const storedLogs = await getLogs();
    setLogs(storedLogs);
  };

  const handleClearLogs = async () => {
    const success = await clearLogs();
    if (success) {
      setLogs([]);
    }
  };

  return (
    <ThemedView style={tw`flex-1 bg-${isDark ? 'black' : 'white'}`}>
      <View style={tw`p-4 flex-row justify-between items-center`}>
        <ThemedText style={tw`text-2xl font-bold`}>Activity Logs</ThemedText>
        <ThemedText 
          onPress={handleClearLogs}
          style={tw`text-sm text-red-500 font-medium`}
        >
          Clear All
        </ThemedText>
      </View>
      
      <ScrollView style={tw`flex-1 px-4`} contentContainerStyle={tw`items-center`}>
        {logs.length === 0 ? (
          <ThemedText style={tw`text-center mt-8 opacity-70 text-lg`}>
            No logs yet. Start tracking activities to see them here!
          </ThemedText>
        ) : (
          logs.map((log) => (
            <View 
              key={log.id}
              style={tw`w-full max-w-md bg-${isDark ? 'gray-800' : 'gray-100'} p-5 rounded-2xl mb-4 shadow-sm`}
            >
              <ThemedText style={tw`font-bold text-xl mb-2`}>
                {log.type}
              </ThemedText>
              <ThemedText style={tw`text-base opacity-80 mb-3`}>
                {log.value}
              </ThemedText>
              <ThemedText style={tw`text-sm opacity-60`}>
                {new Date(log.timestamp).toLocaleString()}
              </ThemedText>
            </View>
          ))
        )}
      </ScrollView>
    </ThemedView>
  );
} 