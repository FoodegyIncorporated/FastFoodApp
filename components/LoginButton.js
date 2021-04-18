import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';

function loginButton(props) {
    const handlePress = () => console.log("Button Pressed");
    return (
        <View
        style = {styles.background}
        >

            <View style={styles.logoContainer}>
            <Image style = {styles.logo} source = {require("../assets/favicon.png")}/>
            <Text>Choose What To Eat With Ease</Text>
            </View>
            
            <View style = {styles.loginButton}>
             <Button title = "Log In" color = "white" onPress = {handlePress}>
             </Button>
            </View>
             
            <View style = {styles.registerButton}>
                <Button color = "white" title = "Register" onPress = {handlePress}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create ({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor:"#fc5c65",
    },
    logo: {
        height: 100,
        width:100,
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center",
    },
    registerButton:{
        width: "100%",
        height: 70,
        backgroundColor:"#43cdc4",
    },
});

export default loginButton;