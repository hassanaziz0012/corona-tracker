import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from './Icon';

function SearchBar (props) { 
    return (
        <View style={styles.container}>
            <TextInput placeholder="Search your documents" style={styles.textInput} />
            <Icon name='magnify' size={30} color="#828282" style={styles.searchIcon} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 15,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    textInput: {
        padding: 15,
        borderRadius: 15,
        width: '90%',
        alignSelf: 'flex-start',
        flex: 1
    },
    searchIcon: {
        padding: 10,
    } 
})

export default SearchBar;