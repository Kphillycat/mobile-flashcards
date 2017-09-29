import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AddDeck extends Component {
    static navigationOptions = {
        tabBarLabel: 'Add Deck',
    };
    
    render() {
        return (
            <View>
                <Text>Add Deck</Text>
            </View>
        );
    }
}

export default AddDeck;