import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirebaseUtils from './FirebaseUtils'

export default function RestaurantList() {
    const [list, setList] = useState([]);

    if (!list.length)
    {
        FirebaseUtils.allRestaurants()
            .then((val) => {
                setList(val);
            })
            .catch((error) => {
                console.error("Unable to retrieve all restaurants.");
                setList([]);
            });
    }

    return (
        <View>
            {list.map((restaurant) => (
                <Text>{restaurant.cuisine}</Text>
            ))}
        </View>
    )
}