import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../Style/color'

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To Do Lists</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#A0DEFF',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: color.primary
    }
})

export default Header;