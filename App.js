import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import Swipes from './components/Swipes'
import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  
  return (
    <View style={styles.container}>
      <Swipes/>
    </View>
   
    
    
);
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },})

