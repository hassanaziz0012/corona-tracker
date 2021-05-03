import React from 'react';
import { View, StyleSheet } from 'react-native';

function ListSeparator (props) { 
    return (
        <View style={styles.container} />
    )
}
const styles = StyleSheet.create({
    container: {
        height: 1,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'black',
        opacity: 0.1,
        margin: 5
    }
});

export default ListSeparator;