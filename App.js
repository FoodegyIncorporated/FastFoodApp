import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirebaseUtils from './components/FirebaseUtils'
import RestaurantList from './components/RestaurantList'

export default function App() {
  FirebaseUtils.init();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <RestaurantList></RestaurantList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
