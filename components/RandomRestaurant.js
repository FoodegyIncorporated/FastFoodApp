import React, {useState} from 'react';
import {Text} from 'react-native';
import FirebaseUtils from './FirebaseUtils'

/**
 * Random Restaurant
 * Example usage of the FirebaseUtils.randomRestaurants() method
 * Returns text component with random restaurant name 
 * @returns JSX.element
 */
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