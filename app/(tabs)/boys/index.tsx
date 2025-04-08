import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useColorScheme } from 'react-native';

// Weight class definitions
const WEIGHT_CLASSES = [
  { weight: 106, icon: "barbell-outline" },
  { weight: 113, icon: "barbell-outline" },
  { weight: 120, icon: "barbell-outline" },
  { weight: 126, icon: "barbell-outline" },
  { weight: 132, icon: "barbell-outline" },
  { weight: 138, icon: "barbell-outline" },
  { weight: 144, icon: "barbell-outline" },
  { weight: 150, icon: "barbell-outline" },
  { weight: 157, icon: "barbell-outline" },
  { weight: 165, icon: "barbell-outline" },
  { weight: 175, icon: "barbell-outline" },
  { weight: 190, icon: "barbell-outline" },
  { weight: 215, icon: "barbell-outline" },
  { weight: 285, icon: "barbell-outline" },
];

export default function BoysRankingsScreen() {
  // Get the current theme using the useColorScheme hook
  const scheme = useColorScheme(); // 'light' or 'dark'

  // Navigate to specific weight class screen
  const navigateToWeightClass = (weight: number) => {
    router.push(`/boys/${weight}`);
  };

  return (
    <View style={[styles.container, scheme === 'dark' && styles.darkContainer]}>
      <Text style={[styles.title, scheme === 'dark' && styles.darkText]}>Boys Wrestling Rankings</Text>
      <Text style={[styles.subtitle, scheme === 'dark' && styles.darkText]}>Select a weight class</Text>
      
      <ScrollView contentContainerStyle={styles.weightClassContainer}>
        {WEIGHT_CLASSES.map((weightClass) => (
          <TouchableOpacity
            key={weightClass.weight}
            style={[styles.weightClassCard, scheme === 'dark' && styles.darkCard]}
            onPress={() => navigateToWeightClass(weightClass.weight)}
          >
            <Text style={styles.emoji}>🤼‍♂️</Text>
            <Text style={[styles.weightText, scheme === 'dark' && styles.darkText]}>{weightClass.weight}</Text>
            <Text style={[styles.poundsText, scheme === 'dark' && styles.darkText]}>lbs</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Light mode background
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333', // Light mode text color
  },
  darkText: {
    color: '#fff', // Dark mode text color
  },
  subtitle: {
    fontSize: 18,
    color: '#555', // Light mode text color
    marginBottom: 24,
    textAlign: 'center',
  },
  weightClassContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  weightClassCard: {
    width: 100,
    height: 100,
    backgroundColor: '#fff', // Light mode card background
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    padding: 10,
  },
  darkCard: {
    backgroundColor: '#333', // Dark mode card background
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  weightText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  poundsText: {
    fontSize: 14,
    color: '#666',
  },
  emoji: {
    fontSize: 28,
  },
});
