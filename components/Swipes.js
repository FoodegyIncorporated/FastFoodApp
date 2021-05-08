import React, { useState } from 'react'
import { StyleSheet, Image, View, Animated, PanResponder } from 'react-native'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import Footer from './Footer'
import {CARD, ACTION_OFFSET } from './Constants'
import Choice from './Choice'
import FirebaseUtils from './FirebaseUtils'

export default function Swipes({navigation}) {
    const [list, setList] = useState([]);
    const liked = useRef([]);
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;

    initRestaurants();

    const restaurant = list.length ? list[0] : null;
    
    useEffect(() => {
        
        if(liked.current.length >= 5){
            console.log("moving to RestaurantDetails");
            navigation.navigate('Recommended', { liked: liked.current });
        }

    }, [liked.current.length]);
    
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
      
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          let temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        
        return array;
    }

    function initRestaurants() {
        if(list.length === 0) {
            console.log("Grabbing restaurant list...");
            FirebaseUtils.allRestaurants().then((val) => {
                shuffle(val);
                setList(val);
            });
        }
    };
    
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_,  {dx, dy, y0}) => {
            swipe.setValue({x: dx, y: dy});
            tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
        },
        onPanResponderRelease: (_, {dx, dy}) => {
            const direction = Math.sign(dx);
            const isActionActive = Math.abs(dx) > ACTION_OFFSET;

            if(isActionActive) {
                Animated.timing(swipe, {
                    duration: 1000,
                    toValue: {
                        x: direction * CARD.OUT_OF_SCREEN,
                        y: dy,
                    },
                    useNativeDriver: true,
                }).start(() => removeTopCard(direction));
            }
            else {
                Animated.spring(swipe, {
                    toValue: {
                        x: 0,
                        y: 0,
                    },
                    useNativeDriver: true,
                    friction: 5,
                }).start();
            }
        },
    });

    const removeTopCard = (direction) => {
        if(direction == 1){
            if(restaurant) liked.current = [...liked.current, restaurant];
            console.log("liked");
        }
        setList((prevState) => prevState.slice(1));
        swipe.setValue({x: 0, y: 0});
    };

    const handleChoice = (direction) => {
        Animated.timing(swipe.x, {
            toValue: direction * CARD.OUT_OF_SCREEN,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => removeTopCard(direction));
    };



    return(
        <View style={styles.container2}>
            <Card 
                swipe={swipe}
                tiltSign={tiltSign}
                restaurant = {restaurant}
                {...panResponder.panHandlers}
            />
            <Footer handleChoice={handleChoice}/>
        </View>
    );
}

function Card({swipe, tiltSign, restaurant, ...rest}) {
    let source = require('../assets/pizza_placeHolder.jpg');
    if (restaurant) {
        source = {uri:'https://raw.githubusercontent.com/FoodegyIncorporated/Foodegy-Images/master/Restaurant_images/' + restaurant.image};
    }
    console.log("Image URI: " + source.uri);

    const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
        inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
        outputRange: ['8deg', '0deg', '-8deg'],
    })

    const likeOpacity = swipe.x.interpolate({
        inputRange: [25, ACTION_OFFSET],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    })

    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-ACTION_OFFSET, -25],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    })

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), { rotate }],
    };
    const renderChoice = React.useCallback(() => {
        return (
            <>
                <Animated.View 
                style={[
                    styles.choiceContainer, 
                    styles.likeContainer, 
                    {opacity: likeOpacity},
                    ]}
                    > 
                    <Choice type="like"/> 
                </Animated.View>
                <Animated.View 
                style={[
                    styles.choiceContainer, 
                    styles.nopeContainer,
                    {opacity: nopeOpacity}
                    ]}
                    > 
                    <Choice type="nope"/> 
                </Animated.View>
            </>
        );
    }, [likeOpacity, nopeOpacity]);

    return (
    <Animated.View 
        style={[styles.container, animatedCardStyle]}
        {...rest}>
        <Image source={source} style={styles.image}/>
        {
            renderChoice()
        }
    </Animated.View>
    );
}

const styles = StyleSheet.create({
    container2 : {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        position: 'absolute',
        top: 250,
    },
    image: {
        width: CARD.WIDTH - 10,
        height: CARD.HEIGHT - 350,
        borderRadius: CARD.BORDER_RADIUS + 200,
    },
    choiceContainer: {
        position: 'absolute',
        top:100,
    },
    likeContainer: {
        left: 45,
        transform: [{rotate: '-30deg'}]
    },
    nopeContainer: {
        right: 45,
        transform: [{rotate: '30deg'}]
    },
});