import React from 'react';
import { Platform, Text, Image, StyleSheet, View, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HelpButton from './HelpButton';
import CircularImage from './CircularImage';

function MainScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
            source={require("../assets/uiForApp/ScreenForComponents.png")} 
            style={styles.background}
            >
                <View style={styles.buttons}>
                    <HelpButton/>
                </View>
                <View style={styles.titles}>
                    <Text style={styles.title}>Foodegy</Text>
                </View>
                <View style={styles.circle}>
                    <CircularImage/>
                </View>
                <View style={styles.swipe}>
                    <Text style={styles.text}>{"Like: swipe right\nDislike: swipe left"}</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: "100%",
        height: "100%",
    },
    buttons: {
        position: "absolute",
        right: 7,
        top: 7,
        elevation: 3,
        zIndex: 1
    },
    titles: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgb(245, 126, 126)',
        elevation: 2,
        paddingTop: 5,
        paddingBottom: 5,
    },
    title: {
        fontSize: 50,
        fontWeight: '500',
        color: '#fff',
        textAlign: "center",
    },
    circle: {
        flex: 7,
       
        
    },
    swipe: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
    },
    text:{
        padding:10,
        paddingTop:5,
        fontSize: 25,
        fontWeight: '100',
        textAlign: "center",
        color: 'white',
    }
});

export default MainScreen;