import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class DeckDetail extends Component {
    render() {

        return (
            <View>
                <Text>{'Deck Title'}</Text>
                <Text>{'3'} cards</Text>
                <TouchableOpacity style={[styles.button, styles.addButton]}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.startButton]}>
                    <Text style={styles.startText} >Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 30,
        margin: 20,
    },
    addButton: {
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
    },
    startButton: {
        backgroundColor: 'black',
    },
    startText: {
        color: 'white',        
    }
});

export default DeckDetail;