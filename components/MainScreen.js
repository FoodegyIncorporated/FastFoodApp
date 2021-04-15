import React from 'react';
import { Platform, Text, Image, StyleSheet, View, ImageBackground} from 'react-native';
import HelpButton from './HelpButton';

function MainScreen(props) {
    return (
        <View style={styles.container}>

            <ImageBackground 
            source={require("../assets/uiForApp/mainScreen.png")} 
            style={styles.image}
            >
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
                <View style={styles.swipe}>
                    <Text style={styles.text}>{"Like: swipe right\nDislike: swipe left"}</Text>
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
        height: '15%',
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titles: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: '500',
        color: '#fff',
    },
    swipe: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        top: '85%',
    },
    text:{
        fontSize: 25,
        fontWeight: '100',
        textAlign: "center",
        color: 'white',
    }
});

export default MainScreen;