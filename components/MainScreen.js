import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function MainScreen(props) {
    return (
        <View style={styles.container}>
            <Image 
            resizeMode="contain"
            style= {styles.image} 
            source={require('../assets/uiForApp/mainScreen.png')} 
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