import React from 'react';
import FirebaseUtils from "./FirebaseUtils"
import { ImageBackground, StyleSheet, View, Image, Text, Button, TextInput, Alert } from 'react-native';

/**
 * Register Screen
 * Display form for user account registration
 * Includes callbacks for validation and Firebase account creation 
 * @param {object} props 
 * @returns JSX.element
 */
function Registerscreen(props) {
    const [confirmpass, onChangeconfirmpass] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    
    const createOneButtonAlert = () =>
        Alert.alert(
            "User Authentication Failed",
            "Make Sure Email Is Correct/User Already Exists",
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed"),
                },
            ]
        );

    const createAlert = () =>
        Alert.alert(
            "Passwords do not match",
            "Make Sure Passwords Match",
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed"),
                },
            ]
        );
    const createAlertL = () =>
        Alert.alert(
            "Passwords is too short",
            "Make Sure Passwords is longer than 6 characters",
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed"),
                },
            ]
        );

    const passwordVerify = () => {
            if (password.length < 6){
                createAlertL();
            }
            else if (confirmpass != password){
                createAlert();
            }
            else
            { 
                handlePress();
            }
        }

    const handlePress = () => {
        FirebaseUtils.createUser(email,password)
        .then((email) => console.log("Success"))
        .catch((error) =>{createOneButtonAlert()});
    }

    

    return (
        <ImageBackground source = {require("../assets/uiForApp/loadingScreen.png")}
        style = {styles.background}>
      <View style = {styles.background}>
          <Image style = {styles.image} source = {require("../assets/uiForApp/logoForApp.png")}/>
          <Text 
          style = {styles.registerText}
          >
              Register
          </Text>
          
          <TextInput 
          style = {styles.textInput}
          onChangeText = {email =>onChangeEmail(email)}
          value = {email}
          placeholder = "Email"
          placeholderTextColor = "white"
          />
          <TextInput 
          style = {styles.textInput}
          onChangeText = {password =>onChangePassword(password)}
          placeholder = "Password"
          placeholderTextColor = "white"
          secureTextEntry = {true}
          value = {password}
          />
          <TextInput 
          style = {styles.textInput}
          onChangeText = {confirmpass =>onChangeconfirmpass(confirmpass)}
          value = {confirmpass}
          placeholder = "Confirm password"
          placeholderTextColor = "white"
          secureTextEntry = {true}
          />
          <View style = {styles.registerSubmit}>
            <Button
            title = "Register" 
            color = "white" 
            onPress = {passwordVerify}
            />
          </View>
          <Text></Text>
      </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    registerSubmit:{
        width: 250,
        height: 40,
        backgroundColor: "teal"
    },
    registerText: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
    },
    image:{
        height: 75,
        width: 75,
        bottom: 75,
    },
    textInput: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
    },

    
});

export default Registerscreen;