import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function LoadingScreen({navigation}) {
    React.useEffect(() => {
      const loaded = navigation.addListener('transitionEnd', (e) => {
        navigation.navigate('Main');
      }, [navigation]);

      return loaded;
    });
    return (
        <View style={styles.image}>

            <ImageBackground 
            source={require("../assets/uiForApp/loadingScreen.png")} 
            style={styles.image}
            />

            <View style={styles.titles}>

                <Text style={styles.title}> Foodegy </Text>
                <Text style={styles.subtitle}> Pick what to eat with ease </Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    titles: {
      top: '30%',
      width: '100%',
      alignItems: 'center'
    },
    title: {
      fontSize: 50,
      fontWeight: '500',
      color: '#fff'
    },
    subtitle: {
      fontSize: 16,
      color: '#5c5e62',
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      position: 'absolute',
    }
});

export default LoadingScreen;