import React from 'react';
import { Platform, Text, Image, StyleSheet, View, ImageBackground} from 'react-native';
import HelpButton from './HelpButton';
import CircularImage from './CircularImage';

function MainScreen(props) {
    return (
        <ImageBackground 
        source={require("../assets/uiForApp/mainScreen.png")} 
        style={styles.backgorund}
        >
            <View style={styles.container}>

                <View style={styles.buttons}>
                
                    <View style={styles.button}>
                        <HelpButton/>
                    </View>
                    <View style={styles.button}>
                        <HelpButton/>
                    </View>
                    
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
                
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    backgorund: {
        width: "100%",
        height: "100%",
    },
    buttons: {
        height: '10%',
        width: '100%',
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titles: {
        height: '15%',
        width: '100%',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        fontWeight: '500',
        color: '#fff',
        textAlign: "center",
    },
    circle: {
        height: '60%',
        width: '100%',
    },
    swipe: {
        height: '15%',
        width: '100%',
        justifyContent: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: '100',
        textAlign: "center",
        color: 'white',
    }
});

export default MainScreen;