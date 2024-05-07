import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Task from './item/task'

function Main() {
    return (
        <ScrollView style={styles.main}>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
            <View style={styles.taskItem}>
                <Task />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
    },
    taskItem: {
        marginBottom: 10
    }
})

export default Main;