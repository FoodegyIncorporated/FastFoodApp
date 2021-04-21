  
import React, { useState } from 'react'
import { StyleSheet,Image,View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'


function Swipes() {

  const renderLeftActions = () => {
    return (
        <View style={styles.container}>
        <Image source={require('../assets/pics/ironman.jpg')} />
        </View>
        )
    }
const renderRightActions = () => {
    return (
         <View style={styles.container}>
                <Image source={require('../assets/pics/download.png')} />
                </View>
                )
    }
  
  

  return (
    
      <Swipeable
      
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
     
    >
     
        <View style={styles.container}>
        <Image source={require('../assets/pics/download.png')} />
        </View>
                
    </Swipeable>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    marginTop:250,
  
  },
})
export default Swipes