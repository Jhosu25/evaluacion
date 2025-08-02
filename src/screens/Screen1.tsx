import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Screen1 = () => {
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
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',

    },
    boxBlue:{
        width: 90,
        height: 90,
        backgroundColor: 'blue',
        borderWidth: 7,
        borderColor: 'white',
        top:0,
        right:0

    },
    boxYellow:{
        flex:1,
        width: 90,
        height: 90,
        backgroundColor: '#F4A300',
        borderWidth: 7,
        borderColor: 'white',
        marginVertical: 5
    },

    boxGreen:{
        width: 90,
        height: 90,
        backgroundColor: 'green',
        borderWidth: 7,
        borderColor: 'white',
        right: 0,
        bottom: 0
    }
})
