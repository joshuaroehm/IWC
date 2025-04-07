import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
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
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="search" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}