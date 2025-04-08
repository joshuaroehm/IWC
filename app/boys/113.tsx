import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Temporary mock data - replace this with your actual data fetching
const MOCK_ATHLETES = [
  { id: '1', name: 'John Smith', school: 'Central High', record: '28-4', rank: 1 },
  { id: '2', name: 'Michael Johnson', school: 'Westview Academy', record: '25-3', rank: 2 },
  { id: '3', name: 'Dave Williams', school: 'Eastside Prep', record: '26-5', rank: 3 },
  { id: '4', name: 'Robert Garcia', school: 'Lincoln High', record: '23-4', rank: 4 },
  { id: '5', name: 'James Wilson', school: 'Washington High', record: '21-7', rank: 5 },
  { id: '6', name: 'Thomas Lee', school: 'Fairview Academy', record: '24-6', rank: 6 },
  { id: '7', name: 'Carlos Rodriguez', school: 'Riverside High', record: '22-8', rank: 7 },
  { id: '8', name: 'Kevin Taylor', school: 'Lakeside Prep', record: '20-5', rank: 8 },
];

export default function WeightClassRankings() {
  const { weight } = useLocalSearchParams();
  const [athletes, setAthletes] = useState<typeof MOCK_ATHLETES>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setAthletes(MOCK_ATHLETES);
      setLoading(false);
    }, 500);

    // In a real app, you would fetch from your API:
    // async function fetchRankings() {
    //   try {
    //     const response = await fetch(`https://your-api.com/rankings/boys/${weight}`);
    //     const data = await response.json();
    //     setAthletes(data);
    //   } catch (error) {
    //     console.error('Error fetching rankings:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchRankings();
  }, [weight]);

  const navigateToAthlete = (athleteId: string) => {
    router.push(`/athlete/${athleteId}`);
  };

  const renderAthlete = ({ item }: { item: typeof MOCK_ATHLETES[0] }) => (
    <TouchableOpacity 
      style={styles.athleteCard}
      onPress={() => navigateToAthlete(item.id)}
    >
      <Text style={styles.rankText}>{item.rank}</Text>
      <View style={styles.athleteInfo}>
        <Text style={styles.athleteName}>{item.name}</Text>
        <Text style={styles.schoolText}>{item.school}</Text>
      </View>
      <View style={styles.recordContainer}>
        <Text style={styles.recordText}>{item.record}</Text>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{weight} lbs Rankings</Text>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0066cc" />
          <Text style={styles.loadingText}>Loading rankings...</Text>
        </View>
      ) : (
        <FlatList
          data={athletes}
          renderItem={renderAthlete}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <Text style={styles.headerText}>Rank</Text>
              <Text style={[styles.headerText, styles.nameHeader]}>Wrestler</Text>
              <Text style={[styles.headerText, styles.recordHeader]}>Record</Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  listContainer: {
    padding: 16,
  },
  listHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  nameHeader: {
    flex: 1,
    marginLeft: 12,
  },
  recordHeader: {
    width: 80,
    textAlign: 'center',
  },
  athleteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  rankText: {
    width: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  athleteInfo: {
    flex: 1,
    marginLeft: 8,
  },
  athleteName: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 4,
  },
  schoolText: {
    fontSize: 14,
    color: '#666',
  },
  recordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordText: {
    fontSize: 16,
    marginRight: 4,
    fontWeight: '500',
  },
});