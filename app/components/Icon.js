import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon ({ name, size, color, style, onPress }) { 
    return (
        <View style={[styles.container, style]}>
            <MaterialCommunityIcons name={name} size={size} color={color} onPress={onPress ? onPress : () => {return} }/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
    }
})

export default Icon