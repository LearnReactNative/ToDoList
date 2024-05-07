import { StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'

function Footer() {
    const [text, onChangeText] = React.useState('');
    const onPress = () => alert('comming soon');
    return (
        <KeyboardAvoidingView style={styles.footer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="To Do"
            // keyboardType="numeric"
            />
            <TouchableHighlight style={styles.button} onPress={onPress} >
                <Text style={styles.buttonIcon}>+</Text>
            </TouchableHighlight>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    input: {
        height: 36,
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginEnd: 10,
        borderColor: '#39A7FF'
    },
    button: {
        backgroundColor: '#5AB2FF',
        height: 36,
        width: 36,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        fontSize: 20,
        marginBottom: 1,
        color: 'white',
        fontWeight: '500',
    }

})

export default Footer;