import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

/**
 * Restaurant Detail
 * Displays a selected restaurants details as passed by
 * the navigation route params 
 * @param {object} navigation 
 * @returns JSX.element
 */
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
                    <Text style={styles.subtitle}>{ restaurant.cuisine }</Text>
                </View>
                <Image 
                style={styles.restaurant_image}
                source={{uri: 'https://raw.githubusercontent.com/FoodegyIncorporated/Foodegy-Images/master/Restaurant_images/' + restaurant.image.replace(/ /g, "_") }} />
                <View style={styles.description}>
                        <Text style={styles.descriptionText}><FontAwesome name="money" size={24} color="white" /> Cost: { restaurant.cost }</Text>
                        <Text style={styles.descriptionText}><FontAwesome name="bar-chart" size={24} color="white" />: { restaurant.rating }/5</Text>
                        <Text style={styles.descriptionText}><FontAwesome name="building" size={24} color="white" />: { restaurant.address }</Text>
                        <Text style={styles.descriptionText}><FontAwesome name="phone" size={24} color="white" />: { restaurant.phone }</Text>
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
        fontSize: 36,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
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