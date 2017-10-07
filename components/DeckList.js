import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { getDecks } from '../utils/helpers';
import Deck from './Deck';

class DeckList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Deck List',
    };

    state = {
        decks: {}
    }

    componentDidMount() {
        getDecks().then((decks) => {
            this.setState({
                decks
            })
        });
    }

    render() {
        const { decks } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={Object.keys(decks)}
                keyExtractor={(data,index) => index}
                renderItem={(data) => 
                    <Deck 
                        deck={decks[data.item]} 
                        onPress={() => navigate('DeckDetail', { deckDetails: decks[data.item] })} 
                    />
                }
            />
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