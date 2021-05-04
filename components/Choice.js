import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from './Constants'
import React from 'react'

export default function Choice({type}) {
    const color = COLORS[type];
    return(
        <View style={[styles.container3, {borderColor: color}, {backgroundColor: 'white'}]}>
            <Text style={[styles.text, { color }]}>{type}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 48,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 4,
    },
    container3: {
        borderWidth: 7,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
});