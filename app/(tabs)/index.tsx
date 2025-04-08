import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // Detects current color scheme (light or dark)

  // Define styles based on the color scheme
  const styles = getStyles(colorScheme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indiana Wrestling</Text>
      <Text style={styles.subtitle}></Text>
    </View>
  );
}

// Function to return styles based on color scheme
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

