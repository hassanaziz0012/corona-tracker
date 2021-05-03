import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Titlebar({ title, backgroundColor, color }) {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.text, { color }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    
        padding: 15,
    },
    text: {
        fontWeight: "bold",
        fontSize: 15,
    }
})

export default Titlebar