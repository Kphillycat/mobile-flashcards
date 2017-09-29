import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Constants } from 'expo'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList
  },
  AddDeck: {
    screen: AddDeck
  }
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'purple' : 'white',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? 'white' : 'purple',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNav = StackNavigator({
    Home: {
      screen: Tabs
    }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar />
        </View>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
