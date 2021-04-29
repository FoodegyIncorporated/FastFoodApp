import React from 'react';
import FirebaseUtils from "./FirebaseUtils"
import { ImageBackground, StyleSheet, View, Image, Text, Button, TextInput, Alert } from 'react-native';

function LogInScreen(props) {
    const [username, onChangeUsername] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    
    const createOneButtonAlert = () =>
        Alert.alert(
            "User Authentication Failed",
            "Make Sure Email Is Correct/Use Email",
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed"),
                },
            ]
        );
    const handlePress = () => {
        FirebaseUtils.signIn(username,password)
        .then((username) => console.log("Success"))
        .catch((error) =>{createOneButtonAlert()});
    }
    

    return (
        <ImageBackground source = {require("../assets/uiForApp/loadingScreen.png")}
        style = {styles.background}>
      <View style = {styles.background}>
          <Image style = {styles.image} source = {require("../assets/uiForApp/logoForApp.png")}/>
          <Text 
          style = {styles.logInText}
          >
              Log In
          </Text>
          <TextInput 
          style = {styles.textInput}
          onChangeText = {username =>onChangeUsername(username)}
          value = {username}
          placeholder = "Username"
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
          <View style = {styles.loginSubmit}>
            <Button
            title = "LOG IN" 
            color = "white" 
            onPress = {handlePress}
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
    loginSubmit:{
        width: 250,
        height: 40,
        backgroundColor: "teal"
    },
    logInText: {
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

export default LogInScreen;