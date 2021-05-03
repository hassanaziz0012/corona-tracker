import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function AppButton ({ title, onPress }) { 
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 15
    },
    text: {
        color: 'white',
    }
})

export default AppButton;