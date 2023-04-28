import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export function HomeScreen() {
  const boxes = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {boxes.map((box) => (
        <View key={box.toString()} style={styles.box} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2D2D',
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  box: {
    width: '48%',
    height: 150,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});