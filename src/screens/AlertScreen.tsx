import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const alerts = [
  { id: '1', title: 'Loan Approved', message: 'Your personal loan has been approved.' },
  { id: '2', title: 'Electricity Bill Due', message: 'Your bill of ₹1,250 is due tomorrow.' },
  { id: '3', title: 'Offer Alert', message: 'Get 5% cashback on recharges this week.' },
];

const AlertsScreen = () => {
  return (
    <FlatList
      data={alerts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.message}</Text>
        </View>
      )}
    />
  );
};

export default AlertsScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});