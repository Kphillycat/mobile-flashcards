import { AsyncStorage } from 'react-native';

const ALL_DECKS = 'ALL_DECKS';

export function fetchAllDecks() {
    return AsyncStorage.getItem(ALL_DECKS).then((result) => result);
}

