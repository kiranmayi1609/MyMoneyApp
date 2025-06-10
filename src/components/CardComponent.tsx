// src/components/CardComponent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardComponentProps } from '../types/card';

const CardComponent = ({ bank, cardNumber, type }: CardComponentProps) => (
  <View style={styles.card}>
    <Text style={styles.bankName}>{bank}</Text>
    <Text style={styles.cardNumber}>{cardNumber}</Text>
    <Text style={styles.cardType}>{type}</Text>
  </View> 
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4B0082',
    padding: 20,
    borderRadius: 15,
    width: 220,
    height: 130,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  bankName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 14,
    letterSpacing: 2,
  },
  cardType: {
    color: '#ccc',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
});

export default CardComponent;
