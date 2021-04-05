<<<<<<< Updated upstream
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
=======
import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import Swipes from './assets/Components/Swipes'
import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  
  return (
    <View style={styles.container}>
      <Swipes/>
>>>>>>> Stashed changes
    </View>
   
    
    
);
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
    alignItems:'center',
  },})

>>>>>>> Stashed changes
