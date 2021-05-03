import React from 'react';
import { View, StyleSheet, Text, Platform, StatusBar } from 'react-native';

function Title ({ title, size, style }) { 
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.text, { fontSize: size }]}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    text: {
        fontSize: 18,
    }
})

export default Title;