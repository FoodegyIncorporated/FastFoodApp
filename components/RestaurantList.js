import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirebaseUtils from './FirebaseUtils'

/**
 * Restaurant List
 * Example component to show how to use Firebaseutils.allRestaurants()
 * @returns JSX.element
 */
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