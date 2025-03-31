import AsyncStorage from '@react-native-async-storage/async-storage';

export interface LogEntry {
  id: string;
  type: string;
  value: string;
  timestamp: string;
}

export const logActivity = async (type: string, value: string) => {
  try {
    const newEntry: LogEntry = {
      id: Date.now().toString(),
      type,
      value,
      timestamp: new Date().toISOString(),
    };

    const existingLogs = await AsyncStorage.getItem('activity_logs');
    const logs: LogEntry[] = existingLogs ? JSON.parse(existingLogs) : [];
    
    // Add new entry at the beginning
    logs.unshift(newEntry);
    
    // Keep only the last 100 logs
    const trimmedLogs = logs.slice(0, 100);
    
    await AsyncStorage.setItem('activity_logs', JSON.stringify(trimmedLogs));
    return true;
  } catch (error) {
    console.error('Error logging activity:', error);
    return false;
  }
};

export const getLogs = async (): Promise<LogEntry[]> => {
  try {
    const logs = await AsyncStorage.getItem('activity_logs');
    return logs ? JSON.parse(logs) : [];
  } catch (error) {
    console.error('Error getting logs:', error);
    return [];
  }
};

export const clearLogs = async () => {
  try {
    await AsyncStorage.removeItem('activity_logs');
    return true;
  } catch (error) {
    console.error('Error clearing logs:', error);
    return false;
  }
}; 