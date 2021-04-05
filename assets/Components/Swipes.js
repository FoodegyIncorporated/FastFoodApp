  
import React, { useState } from 'react'
import { StyleSheet,Image,View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'


function Swipes() {

  const renderLeftActions = () => {
    return (
        <View style={styles.container}>
        <Image source={require('../pics/iPhone_XR_XS_Max_11_1.png')} />
        </View>
        )
    }
const renderRightActions = () => {
    return (
         <View style={styles.container}>
                <Image source={require('../pics/download.png')} />
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
        <Image source={require('../pics/download.png')} />
        </View>
                
    </Swipeable>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
})
export default Swipes