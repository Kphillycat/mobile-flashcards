import React, { Component } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { clearAllDecks } from '../utils/helpers';
import Deck from './Deck';
import { connect } from 'react-redux';
import { retrieveDecks } from '../actions';
import get from 'lodash.get';
import globalStyles from '../utils/styles';

class DeckList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Deck List',
    };

    state = {
        decks: {}
    }

    componentDidMount() {
        this.props.dispatch(retrieveDecks());
    }

    componentWillReceiveProps(newProps) {
        if(get(newProps, 'navigation.state.params.shouldRefresh')) {
            this.props.dispatch(retrieveDecks());
        }
    }

    clearDecks = () => {
        clearAllDecks().then(() => {
            this.refreshDecks();
        });
    }

    render() {
        const { decks, loadingStatus } = this.props.state;
        const { navigate } = this.props.navigation;

        if (loadingStatus.isFetching) {
            return ( 
                <ActivityIndicator 
                    animating={true}
                    style={globalStyles.loader}
                    size="large"
                />
            )
        }

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
                            onPress={() => navigate('DeckDetail', { deckId: data.item })} 
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

mapStateToProps = (state) => ({
    state 
});

export default connect(mapStateToProps)(DeckList);