import React from 'react'
import { StyleSheet, View } from 'react-native'
import RoundButton from './RoundButton'

/**
 * Footer
 * Sub-component of Swipes, displays alternate to swiping using buttons 
 * @param {object} handleChoice 
 * @returns JSX.element
 */
export default function Footer({ handleChoice }) {
    const dislike = require('../assets/uiForApp/timesPic.png');
    const like = require('../assets/uiForApp/heartPic.png');
    return(
        <View style={styles.styleFooter}>
            <RoundButton name={dislike} onPress={() => handleChoice(-1)} />
            <RoundButton name={like} onPress={() => handleChoice(1)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    styleFooter: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 150,
        width: 170,
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -1,
    }
});