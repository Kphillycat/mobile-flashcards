import { AsyncStorage } from 'react-native';

const ALL_DECKS = 'ALL_DECKS';

export function fetchAllDecks() {
    return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse).then((result) => result);
}

export function addDeck(deckTitle) {
    return AsyncStorage.getItem(ALL_DECKS).then(JSON.parse).then((result) => {
        result[deckTitle] = {
            title: deckTitle,
            questions: []
        };

        AsyncStorage.setItem(ALL_DECKS, JSON.stringify(result));
        return result;
    });
}

export function setData(data) {
    AsyncStorage.setItem(ALL_DECKS, JSON.stringify(data));    
}