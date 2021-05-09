import React, {useState} from 'react';
import { Alert, Modal, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

/**
 * Help Button
 * Display modal with some helpful tips on using the app
 * @param {object} props 
 * @returns JSX.element
 */
function HelpButton(props) {
    const [modalVisible, setModalVisible] = useState(false);
    let message = "We've got you!!\n\nFoodegy makes life easier by helping you decide where to eat! Don't know what you're in the mood for? We got you covered.\n\nYou simply swipe left on something you dislike and swipe right on something you find delicious.\n\nWe then help you find restaurants or fast foods based on your likes and dislikes! We also find restaurants or fast foods closest to you, along with prices.";
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{message}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Got it</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image 
            style={styles.image}
            source={require("../assets/question-mark.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
  }
});
  
export default HelpButton;