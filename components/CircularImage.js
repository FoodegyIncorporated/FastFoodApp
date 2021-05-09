import React from 'react';
import { Image, View, StyleSheet, ImageBackground } from 'react-native';

/**
 * Circular Image
 * Component to display an image with a circular mask 
 * @param {object} props 
 * @returns JSX.element
 */
function CircularImage(props) {
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
                 source={require("../assets/pizza_placeHolder.jpg")}
                ></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        borderWidth: 4,
        borderColor: 'white',
    }
})

export default CircularImage;