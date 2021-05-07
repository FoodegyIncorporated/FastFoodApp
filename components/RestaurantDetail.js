import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native'

export default function RestaurantDetail({ route, navigation }) {
    let { liked } = route.params;
    let restaurant = liked.length ? liked[Math.floor(Math.random() * liked.length)] : null;
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
            source={require("../assets/uiForApp/ScreenForComponents.png")}
            style={styles.background}>
                <View style={styles.titleBlock}>
                    <Text style={styles.title}>{ restaurant.name }</Text>
                </View>
                <Image 
                style={styles.restaurant_image}
                source={{uri: 'https://raw.githubusercontent.com/FoodegyIncorporated/Foodegy-Images/master/Restaurant_images/' + restaurant.image.replace(/ /g, "_") }} />
                <View style={styles.description}>
                        <Text style={styles.descriptionText}>Cost: { restaurant.cost }</Text>
                        <Text style={styles.descriptionText}>Rating: { restaurant.rating }</Text>
                        <Text style={styles.descriptionText}>Address: { restaurant.address }</Text>
                        <Text style={styles.descriptionText}>Phone: { restaurant.phone }</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1
    },
    titleBlock: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    restaurant_image: {
        flex: 3,
        width: '100%',
    },
    description: {
        flex: 2,
        marginLeft: 20,
        justifyContent: 'center'
    },
    descriptionText: {
        color: 'white',
        fontSize: 24,
        paddingBottom: 7,
    }
});