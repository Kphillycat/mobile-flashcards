import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

class Deck extends Component {
    render() {
        const { deck } = this.props;
        const { width } = Dimensions.get('window');
        return (
            <View style={[styles.deckContainer, {width: width}]}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.subTitle}>{deck.questions.length} cards</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        borderColor: 'black',
        borderWidth: 1,
        margin: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    subTitle: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    }
});

export default Deck;