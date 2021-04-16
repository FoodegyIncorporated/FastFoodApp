import React from 'react';
import { Platform, Text, Image, StyleSheet, View, ImageBackground } from 'react-native';
import HelpButton from './HelpButton';
import RandomRestaurant from './RandomRestaurant'

function MainScreen(props) {
    return (
        <View style={styles.container}>

            <ImageBackground 
            source={require("../assets/uiForApp/mainScreen.png")} 
            style={styles.image}
            > </ImageBackground>
                <View style={styles.text1}>
                    <RandomRestaurant />
                    <View style={styles.buttons}>
                        <Text>Menu Here!!!</Text>
                        <HelpButton/>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,

    },
    image: {
        width: "100%",
        height: "100%",
    },
    buttons: {
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    text1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MainScreen;