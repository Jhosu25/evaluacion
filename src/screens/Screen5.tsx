import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Screen5 = () => {
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
        flexDirection: 'row',
        justifyContent:'center'
    },
    boxBlue:{
        width: 90,
        height: '90%',
        backgroundColor: 'blue',
        borderWidth: 7,
        borderColor: 'white',
        marginHorizontal: 10,
    },
    boxYellow:{
        height: '90%',
        width: 90,
        backgroundColor: '#F4A300',
        borderWidth: 7,
        borderColor: 'white',
        marginHorizontal: 10,
    },
    boxGreen:{
        height: '90%',
        width: 90,
        backgroundColor: 'green',
        borderWidth: 7,
        borderColor: 'white',
        marginHorizontal: 10,

    }
})
