import React from 'react'
import { TouchableWithoutFeedback, Animated, StyleSheet, Image, ImageBackground } from 'react-native'
import { useRef } from 'react';
import { useCallback } from 'react';
export default function RoundButton({name, size, color, onPress}) {
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
            <Animated.View style={[styles.styleButtons, {transform: [{ scale }]}]}>   
                <ImageBackground style={styles.styleButtons}>
                    <Image style={styles.styleImage} source={name} />
                </ImageBackground>     
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    styleButtons: {
        width: 70,
        height:  70,
        backgroundColor: '#fff',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    styleImage: {
        width: 40,
        height:  40,
        borderRadius: 40,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }
});