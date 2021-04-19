import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Platform } from 'react-native';

function AccessScreen({navigation}) {
    const handlePress = () => console.log("Button Pressed");
    const handleGuest = () => {
        navigation.navigate('Main');
    };
    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    };
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
            source={require("../assets/uiForApp/ScreenForComponents.png")} 
            style={styles.background}
            >
            <View style={styles.titles}>
                <Text style={styles.title}>Foodegy</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image style = {styles.logo} source = {require("../assets/uiForApp/logoForApp.png")}/>
                <Text style={styles.subtitle}>Choose What To Eat With Ease</Text>
            </View>
            <View style={styles.footer}>
                <View style = {styles.bottomButton}>
                    <Button title="Log In" color="#fc5c65" onPress={handleLogin} />
                </View>
                <View style = {styles.bottomButton}>
                    <Button title="Register" color="#43cdc4" onPress={handlePress} />
                </View>
                <View style = {styles.bottomButton}>
                    <Button title="Continue as Guest" color="#a0a0a0" onPress={handleGuest} />
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    titles: {
        flex: 2,
        width: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 50,
        fontWeight: '500',
        color: '#fff',
        textAlign: "center",
    },
    logoContainer:{
        flex: 5,
        justifyContent: 'center',
        alignItems:"center",
    },
    logo: {
        height: 150,
        width: 150,
    },
    subtitle: {
        fontSize: 24,
        color: 'white',
    },
    footer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        ...Platform.select({
            ios: {
                backgroundColor: "white"
            }
        }),
        paddingTop: 20,
        paddingBottom: 0,
    },
    bottomButton:{
        width: "100%",
    },
});

export default AccessScreen;