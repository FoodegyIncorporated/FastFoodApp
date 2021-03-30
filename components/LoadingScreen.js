import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function LoadingScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/uiForApp/loginForApp.png')}
        >
            <View style={styles.logoContainer}>
                <Image style= {styles.logo} source={require('../assets/uiForApp/logoForApp.png')}/>
                <Text> Pick where to eat with ease </Text>
            </View>

            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
            <View style={styles.guestButton}></View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 200,
        alignItems: "center",
    },
    guestButton: {
        width: "100%",
        height: 70,
        backgroundColor: 'lightblue',
    }
});

export default LoadingScreen;