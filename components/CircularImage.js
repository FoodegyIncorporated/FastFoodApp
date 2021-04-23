import React from 'react';
import { Image, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function CircularImage(props) {
    const renderLeftActions = () => {
        return (
            <View style={styles.container}>
            <View style={[styles.background, styles.shadow]}>
                <Image
                 style={styles.image}
                 blurRadius={1}
                 source={require("../assets/pizza_placeHolder.jpg")}
                />
            </View>
            <View style={[styles.original, styles.shadow]}>
                <Image
                 style={styles.image}
                 source={require("../assets/pics/download.png")}
                ></Image>
            </View>
            </View>
            )
        }
    const renderRightActions = () => {
        return (
            <View style={styles.container}>
            <View style={[styles.background, styles.shadow]}>
                <Image
                 style={styles.image}
                 blurRadius={1}
                 source={require("../assets/pizza_placeHolder.jpg")}
                />
            </View>
            <View style={[styles.original, styles.shadow]}>
                <Image
                 style={styles.image}
                 source={require("../assets/pics/download.png")}
                ></Image>
            </View>
            </View>
                    )
        }
    
    
    
    return (
       

        <ScrollView ref='scrollView' contentContainerStyle={styles.container}>
        <View style={styles.container}>
             <Swipeable
        
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
       >
            <View style={[styles.background, styles.shadow]}>
                <Image
                 style={styles.image}
                 blurRadius={1}
                 source={require("../assets/pizza_placeHolder.jpg")}
                />
            </View>
            <View style={[styles.original, styles.shadow]}>
                <Image
                 style={styles.image}
                 source={require("../assets/pizza_placeHolder.jpg")}
                ></Image>
            </View>
            </Swipeable>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container :{
        
        flex:1,
        flexDirection:'column',
      
    },
    original: {
        position: 'absolute',
        elevation: 25,
    },
    background: {
        top: '25%',
        elevation: 24,
    },
    shadow: {
        borderRadius: 300/2,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
    },

    image: {
        borderRadius: 300/2,
        height: 300,
        width: 300,
        borderWidth: 3,
        borderColor: 'white',
    }
})

export default CircularImage;