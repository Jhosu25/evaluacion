import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Screen4 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxBlue}></View>
            <View style={styles.boxYellow}></View>
            <View style={styles.boxGreen}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63BBC7',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    boxBlue:{
        width: 90,
        height: 90,
        backgroundColor: 'blue',
        borderWidth: 7,
        borderColor: 'white',
        top:0,
        alignSelf: 'flex-start'

    },
    boxYellow:{
        width: 90,
        height: 90,
        backgroundColor: '#F4A300',
        borderWidth: 7,
        borderColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    boxGreen:{
        width: 90,
        height: 90,
        backgroundColor: 'green',
        borderWidth: 7,
        borderColor: 'white',
        flexDirection: 'column',
        bottom:0,
        alignSelf: 'flex-end'
    }
})
