import React, { Component } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native';
import { getDecks, clearAllDecks } from '../utils/helpers';
import Deck from './Deck';

class DeckList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Deck List',
    };

    state = {
        decks: {}
    }

    componentDidMount() {
        this.refreshDecks();
    }

    componentWillReceiveProps(newProps) {
        if(newProps && newProps.navigation.state.params.shouldRefresh) {
            this.refreshDecks();
        }
    }

    refreshDecks = () => {
        getDecks().then((decks) => {
            this.setState({
                decks
            })
        })
    }

    clearDecks = () => {
        clearAllDecks().then(() => {
            this.refreshDecks();
        });
    }

    render() {
        // TODO: Add redux
        const { decks } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View>
                {__DEV__ && <TouchableOpacity onPress={this.clearDecks}>
                    <Text style={styles.eraseText} >Erase ALL DECKS!</Text>
                </TouchableOpacity>}
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
    },
    eraseText: {
        fontSize: 15,
        color: 'red'
    }
  });

export default DeckList;