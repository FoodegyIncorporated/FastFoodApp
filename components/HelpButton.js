import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';

let message = "Foodegy makes life easier by helping you decide where to eat! Don't know what you're in the mood for? We got you covered.\n\nYou simply swipe left on something you dislike and swipe right on something you find delicious.\n\nWe then help you find restaurants or fast foods based on your likes and dislikes! We also find restaurants or fast foods closest to you, along with prices.";

function HelpButton(props) {
    return (
        <TouchableOpacity onPress={() => Alert.alert("We've got you!!", message, [{text: "Got it"}])}>
            <Image 
                style={styles.button}
                source={require("../assets/question-mark.jpg")}
            />
        </TouchableOpacity>);
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        width: 50,
        height: 50,
    }
})

export default HelpButton;