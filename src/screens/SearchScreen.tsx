import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const searchItems = [
  'Mobile Recharge', 'Loan Repayment', 'Rent', 'Free Credit Score',
  'Refer & Earn ₹200', 'Electricity', 'FASTag', 'Mutual Funds',
];

const SearchScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Search</Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Search for 'contacts'"
          style={styles.input}
        />
      </View>

      <Text style={styles.subHeader}>SEARCH FOR</Text>
      <View style={styles.chipsContainer}>
        {searchItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.chip}>
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontSize: 20, fontWeight: '600', marginBottom: 16 },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 12,
    marginBottom: 24,
  },
  input: { marginLeft: 10, flex: 1 },
  subHeader: { fontWeight: '500', marginBottom: 10 },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: { fontSize: 14 },
});
