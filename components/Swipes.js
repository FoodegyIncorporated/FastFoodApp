import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, Animated, PanResponder } from 'react-native'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import Footer from './Footer'
import {CARD, COLORS, ACTION_OFFSET } from './Constants'
import {pics as picsArray} from './pics'
import Choice from './Choice'
import FirebaseUtils from './FirebaseUtils'

export default function Swipes() {
    const [list, setList] = useState([]);
    let liked = [];
    let restaurants = [];
    const [pic, setPic] = useState(picsArray);
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;
    
    initRestaurants();
    
    useEffect(() => {
        
        initRestaurants();

    }, [list.length]);

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        
        return array;
    }

    function initRestaurants(){
        if(list.length === 0) {
            FirebaseUtils.allRestaurants().then((val) => {
                setList(val);
            });
            shuffle(list);
            console.log(typeof(list[0]));
        }
        restaurants = list.map(val => val ? val.image : "");
        
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
                }).start(removeTopCard);
                if(direction == 1){
                    console.log("liked");
                }
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

    const removeTopCard = useCallback(() => {
        setList((prevState) => prevState.slice(1));
        swipe.setValue({x: 0, y: 0});
    }, [swipe]);

    const handleChoice = useCallback((direction) => {
        if(direction == 1){
            console.log("liked");
        }
        Animated.timing(swipe.x, {
            toValue: direction * CARD.OUT_OF_SCREEN,
            duration: 1000,
            useNativeDriver: true,
        }).start(removeTopCard);
    }, [removeTopCard, swipe.x]);



    return(
        <View style={styles.container2}>
   
            <Card 
                swipe={swipe}
                tiltSign={tiltSign}
                restaurant = {restaurants[0]}
                {...panResponder.panHandlers}
            />

            <Footer handleChoice={handleChoice}/>
        </View>
    );
}

function Card({swipe, tiltSign, restaurant, ...rest}) {
    console.log(restaurant);
    const source = {uri:'https://raw.githubusercontent.com/FoodegyIncorporated/Foodegy-Images/master/Restaurant_images/' + restaurant};


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