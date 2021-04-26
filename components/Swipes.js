  
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { StyleSheet, Image, View, ScrollView, Dimensions, Text, TouchableWithoutFeedback, Animated, PanResponder } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

const {width, height} = Dimensions.get('screen');

const ACTION_OFFSET = 100;

const CARD = {
    WIDTH: width * 0.9,
    HEIGHT: height * 0.78,
    BORDER_RADIUS: 20,
    OUT_OF_SCREEN: width + 0.5 * width,
}

export default function Swipes() {
    const [pic, setPic] = useState(pics);
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if(!pic.length) {
            setPic(pics)
        }
    }, [pic.length]);

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
                    duration: 800,
                    toValue: {
                        x: direction * CARD.OUT_OF_SCREEN,
                        y: dy,
                    },
                    useNativeDriver: true,
                }).start(removeTopCard);
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
        setPic((prevState) => prevState.slice(1));
        swipe.setValue({x: 0, y: 0})
    }, [swipe]);

    const handleChoice = useCallback((direction) => {
        Animated.timing(swipe.x, {
            toValue: direction * CARD.OUT_OF_SCREEN,
            duration: 800,
            useNativeDriver: true,
        }).start(removeTopCard);
    }, [removeTopCard, swipe.x]);

    return(
        <View style={styles.container2}>
            {pic.map(({id, source}, index) => {
                const isFirst = index == 0;
                const dragHandlers = isFirst ? panResponder.panHandlers : {};

                return (
                <Card 
                    key={id} 
                    id={id} 
                    source={source} 
                    isFirst={isFirst}
                    swipe={swipe}
                    tiltSign={tiltSign}
                    {...dragHandlers}/>
                );
            }).reverse()}

            <Footer handleChoice={handleChoice}/>
        </View>
    );
}

const pics = [
    {id: '1', source: require("../assets/Restaurant_images/dunkin/1.png")},
    {id: '2', source: require("../assets/Restaurant_images/subway/1.png")},
    {id: '3', source: require("../assets/Restaurant_images/starbucks/1.png")},
    {id: '4', source: require("../assets/Restaurant_images/chilis/1.png")},
];

function Card({id, source, isFirst, swipe, tiltSign, ...rest}) {

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
        style={[styles.container, isFirst && animatedCardStyle]}
        {...rest}>
        <Image source={source} style={styles.image}/>
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.9']} 
        style={styles.gradient} />
        {
            isFirst && renderChoice()
        }
    </Animated.View>
    );
}

function Choice({type}) {
    const color = COLORS[type];
    return(
        <View style={[styles.container3, {borderColor: color}, {backgroundColor: 'white'}]}>
            <Text style={[styles.text, { color }]}>{type}</Text>
        </View>
    );
}

function Footer({ handleChoice }) {
    return(
        <View style={styles.container4}>
            <RoundButton name="times" size={40} color={COLORS.nope} onPress={() => handleChoice(-1)} />
            <RoundButton name="heart" size={40} color={COLORS.like} onPress={() => handleChoice(1)}/>
        </View>
    );
}

function RoundButton({name, size, color, onPress}) {
    const scale = useRef(new Animated.Value(1)).current;

    const animateScale = useCallback(
        (newValue) => {
            Animated.spring(scale, {
                toValue: newValue,
                friction: 4,
                useNativeDriver: true,
            }).start();
        }, 
        [scale]
    );

    return(
        <TouchableWithoutFeedback 
        onPressIn={() => animateScale(0.8)} 
        delayPressIn={0}
        onPressOut={() => { 
            animateScale(1);
            onPress();
        }}
        delayPressOut={110}
        >
            <Animated.View style={[styles.container5, {transform: [{ scale }]}]}>
                <FontAwesome name={name} size={size} color={color}/>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const COLORS = {
    like: '#00eda6',
    nope: '#ff006f'
}

const styles = StyleSheet.create({
    container5: {
        width: 70,
        height:  70,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    container4: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -1,
    },
    container3: {
        borderWidth: 7,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
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
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        borderRadius: CARD.BORDER_RADIUS,
    },
    id: {
        position: 'absolute',
        bottom: 22,
        left: 22,
        fontSize: 36,
        fontWeight: 'bold',
        color: "#fff"
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
    text: {
        fontSize: 48,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 4,
    },

});