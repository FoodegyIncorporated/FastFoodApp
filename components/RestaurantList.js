import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirebaseUtils from './FirebaseUtils'

export default function RestaurantList() {
    const [list, setList] = useState([]);

    if (list.length === 0)
    {
        FirebaseUtils.allRestaurants().then((val) => {
            setList(val);
        });
    }

    return (
        <View>
            {list.map((restaurant) => (
                <Text>{restaurant.name}</Text>
            ))}
        </View>
    )
}