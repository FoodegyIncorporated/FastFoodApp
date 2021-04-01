import React from 'react';
import { Text, Image, StyleSheet, View, ImageBackground } from 'react-native';
import HelpButton from './HelpButton';


function MainScreen(props) {
    return (
        <View style={styles.container}>

            <ImageBackground 
            source={require("../assets/uiForApp/mainScreen.png")} 
            style={styles.image}
            >
                <View style={styles.buttons}>
                    <Text>Menu Here!!!</Text>
                    <HelpButton></HelpButton>
                </View>
            </ImageBackground>
            
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
    }
});

export default MainScreen;