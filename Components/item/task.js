import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

export default function Task() {
    const onPress = () => alert('comming soon');
    return (
        <TouchableHighlight onPress={onPress} >
            <View style={styles.task}>
                <View style={styles.number}>
                    <Text style={styles.numberText}>01</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentText}>Learning React Native Day 1</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    task: {
        // marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#80B3FF',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'blue'
    },
    number: {
        borderRadius: 5,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDDE55'
    },
    numberText: {
        fontWeight: '500',
        fontSize: 14
    },
    content: {
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    contentText: {
        fontSize: 14
    }

})