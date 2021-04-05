import React, {useState} from 'react';
import {Text} from 'react-native';
import FirebaseUtils from './FirebaseUtils'

export default function RandomRestaurant() {
    const [restaurantRetrieved, setRestaurantRetrieved] = useState(false);
    const [restaurant, setRestaurant] = useState();

    if (!restaurantRetrieved) {
        FirebaseUtils.randomRestaurant().then((val) => {
            setRestaurantRetrieved(true);
            setRestaurant(val);
        });
    }

    let name = restaurant ? restaurant.name : "";

    return (
        <Text>{name}</Text>
    )
}