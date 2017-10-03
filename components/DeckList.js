import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getDecks } from '../utils/helpers';
import Deck from './Deck';

class DeckList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Deck List',
    };

    state = {
        decks: []
    }

    componentDidMount() {
        getDecks().then((decks) => {
            this.setState({
                decks
            })
        });
    }

    onPress = () => {
        this.props.navigation.navigate('DeckDetail', { deck: 'id' });
    }

    render() {
        const { decks } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Decks</Text>
                {Object.keys(decks).map((deck, idx) =>
                    <Deck key={idx} deck={decks[deck]} onPress={() => navigate('DeckDetail', { deckDetails: decks[deck] })} />
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default DeckList;