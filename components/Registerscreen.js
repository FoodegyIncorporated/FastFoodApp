import React from 'react';
import FirebaseUtils from "./FirebaseUtils"
import { ImageBackground, StyleSheet, View, Image, Text, Button, TextInput, Alert } from 'react-native';

function Registerscreen(props) {
    const [confirmpass, onChangeconfirmpass] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
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
        FirebaseUtils.createUser(confirmpass,email,password)
        .then((confirmpass) => console.log("Success"))
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
          />
          <View style = {styles.registerSubmit}>
            <Button
            title = "Register" 
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