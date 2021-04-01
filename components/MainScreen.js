import React from 'react';
import { Image, StyleSheet, View, ImageBackground } from 'react-native';

function MainScreen(props) {
    return (
        <View style={styles.image}>

            <ImageBackground 
            source={require("../assets/uiForApp/mainScreen.png")} 
            style={styles.image}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    }
});

export default MainScreen;