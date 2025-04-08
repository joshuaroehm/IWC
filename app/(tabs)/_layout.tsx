import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function TabsLayout() {
  const colorScheme = useColorScheme(); // Detects current color scheme (light or dark)
  
  // Define styles based on the color scheme
  const styles = getStyles(colorScheme);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#121212' : '#ffffff', // Dark or light background
        },
        tabBarActiveTintColor: colorScheme === 'dark' ? '#FFA500' : '#000000', // Active icon color
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#bbb' : '#666', // Inactive icon color
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="boys/index"
        options={{
          title: 'Boys Rankings',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="trophy" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="girls/index"
        options={{
          title: 'Girls Rankings',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="trophy-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

// Function to return styles based on light/dark mode
const getStyles = (colorScheme: 'light' | 'dark' | null | undefined) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorScheme === 'dark' ? '#121212' : '#ffffff', // Dark mode background
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      color: colorScheme === 'dark' ? '#FFA500' : '#333', // Title color changes for dark mode
    },
    subtitle: {
      fontSize: 18,
      color: colorScheme === 'dark' ? '#ccc' : '#666', // Subtitle color changes for dark mode
    },
  });
};
