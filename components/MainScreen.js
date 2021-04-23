import React from 'react';
import { Platform, Text, Image, StyleSheet, View, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HelpButton from './HelpButton';
import CircularImage from './CircularImage';
import Swipes from './Swipes'

function MainScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containers}>
                <View style={styles.buttons}>
                    <HelpButton/>
                </View>
                <View style={styles.titles}>
                    <Text style={styles.title}>Foodegy</Text>
                </View>
                <View style={styles.circle}>
                    <Swipes />
                </View> 
            </View> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 125, 125)"
    },
    containers: {
        flex: 1,
        bottom: 60,
        backgroundColor: "rgb(255, 125, 125)"
    },
    buttons: {
        position: "absolute",
        right: 25,
        top: 85,
        elevation: 3,
        zIndex: 1
    },
    titles: {
        width: '100%',
        top: 60,
        justifyContent: 'center',
        backgroundColor: 'rgb(245, 126, 126)',
        elevation: 2,
        paddingTop: 25,
        paddingBottom: 5,
    },
    title: {
        fontSize: 50,
        fontWeight: '500',
        color: '#fff',
        textAlign: "center",
    },
    circle: {
        position: 'absolute',
        width: '100%',
        height: '108%',
    },
    text:{
        fontSize: 25,
        fontWeight: '100',
        textAlign: "center",
        color: 'white',
    }
});

export default MainScreen;