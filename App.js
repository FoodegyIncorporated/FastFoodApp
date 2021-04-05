import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import FirebaseUtils from './components/FirebaseUtils';
import RestaurantList from './components/RestaurantList';
import MainScreen from './components/MainScreen';
import LoadingScreen from './components/LoadingScreen';
import RandomRestaurant from './components/RandomRestaurant';

export default function App() {
  FirebaseUtils.init();
  return (
    <View>
      <MainScreen />
      <RandomRestaurant />
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