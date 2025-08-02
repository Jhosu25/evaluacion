import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Screen3 = () => {
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
        alignItems: 'center',
        justifyContent: 'center',

    },
    boxBlue:{
        width: 90,
        height: 90,
        backgroundColor: 'blue',
        borderWidth: 7,
        borderColor: 'white',
        justifyContent: 'center',
        alignSelf: 'flex-end'

    },
    boxYellow:{
        width: 90,
        height: 90,
        backgroundColor: '#F4A300',
        borderWidth: 7,
        borderColor: 'white',
        marginTop: 2,
        alignSelf: 'flex-start'
    },

    boxGreen:{
        width: 90,
        height: 90,
        backgroundColor: 'green',
        borderWidth: 7,
        borderColor: 'white',
        flexDirection: 'column',
        alignSelf: 'center'
    }
})
