import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import FirebaseUtils from './components/FirebaseUtils';
import RestaurantList from './components/RestaurantList';
import MainScreen from './components/MainScreen';
import LoadingScreen from './components/LoadingScreen';
import RandomRestaurant from './components/RandomRestaurant';
import LoginButton from './components/LoginButton';
import HelpButton from './components/HelpButton';
import LogInScreen from './components/LogInScreen';
import loginButton from './components/LoginButton';

export default function App() {
  FirebaseUtils.init();
  return (
      <LogInScreen/>
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