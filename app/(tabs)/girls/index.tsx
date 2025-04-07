import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Weight class definitions
const WEIGHT_CLASSES = [
  { weight: 100, icon: "barbell-outline" },
  { weight: 105, icon: "barbell-outline" },
  { weight: 110, icon: "barbell-outline" },
  { weight: 115, icon: "barbell-outline" },
  { weight: 120, icon: "barbell-outline" },
  { weight: 125, icon: "barbell-outline" },
  { weight: 130, icon: "barbell-outline" },
  { weight: 135, icon: "barbell-outline" },
  { weight: 140, icon: "barbell-outline" },
  { weight: 145, icon: "barbell-outline" },
  { weight: 155, icon: "barbell-outline" },
  { weight: 170, icon: "barbell-outline" },
  { weight: 190, icon: "barbell-outline" },
  { weight: 235, icon: "barbell-outline" },
];

export default function GirlsRankingsScreen() {
  // Navigate to specific weight class screen
  const navigateToWeightClass = (weight: number) => {
    router.push(`/girls/${weight}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Girls Wrestling Rankings</Text>
      <Text style={styles.subtitle}>Select a weight class</Text>
      
      <ScrollView contentContainerStyle={styles.weightClassContainer}>
        {WEIGHT_CLASSES.map((weightClass) => (
          <TouchableOpacity
            key={weightClass.weight}
            style={styles.weightClassCard}
            onPress={() => navigateToWeightClass(weightClass.weight)}
          >
            <Ionicons name={weightClass.icon as any} size={28} color="#333" />
            <Text style={styles.weightText}>{weightClass.weight}</Text>
            <Text style={styles.poundsText}>lbs</Text>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
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
    backgroundColor: '#fff',
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
  weightText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  poundsText: {
    fontSize: 14,
    color: '#666',
  },
});