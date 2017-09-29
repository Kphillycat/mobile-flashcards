import { fetchAllDecks } from './api';
import { AsyncStorage } from 'react-native';

export function getDummyData() {
  return {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
}

export function getDecks() {
  return fetchAllDecks().then((decks) => {
    if (decks !== null) {
      return decks;
    }

    return getDummyData();
  });
}

export function getDeck(id) {

}

export function saveDeckTitle(title) {

}

export function addCardToDeck(title, card) {

}
