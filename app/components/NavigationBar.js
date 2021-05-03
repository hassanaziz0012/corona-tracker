import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './Icon';

function NavigationBar ({ activeIcon, navigation }) {
    // const {activeScreen, setActiveScreen} = 

    if (activeIcon === 'text-box-multiple') {

    }
    
    return (
        <View style={styles.container}>
            <Icon name="text-box-multiple" size={30} color={activeIcon === 'text-box-multiple' ? 'dodgerblue' : 'gray'} onPress={ () => navigation.navigate('Documents') } />
            <Icon name="note-plus" size={30} color={activeIcon === 'note-plus' ? 'dodgerblue' : 'gray'} onPress={ () => navigation.navigate('Scan') } />
            <Icon name="account-cog-outline" size={30} color={activeIcon === 'account-cog-outline' ? 'dodgerblue' : 'gray'} onPress={ () => navigation.navigate('Settings') } />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: "white",
        width: '100%',
        padding: 10,

        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})

export default NavigationBar;