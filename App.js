import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import FirebaseUtils from './components/FirebaseUtils';
import RestaurantList from './components/RestaurantList';
import HelpButton from './components/HelpButton';

export default function App() {
  FirebaseUtils.init();
  return (
    <View style={styles.container}>
      <HelpButton></HelpButton>
      <Text>Open up App.js to start working on your app!</Text>
      <RestaurantList style={styles.list}></RestaurantList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
