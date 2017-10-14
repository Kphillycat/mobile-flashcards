import { ADD_CARD, ADD_DECK, RECEIVE_DECKS, RECEIVE_DECK_DETAIL, IS_LOADING } from '../utils/constants';
import * as api from '../utils/helpers';

export function isLoading(isFetching) {
    return {
        type: IS_LOADING,
        isFetching
    }
}

export function addCardSuccess (deck) {
    return {
        type: ADD_CARD,
        deck
    }
}

export const addCard = (deckTitle, card) => (dispatch) => {
    api.addCardToDeck(deckTitle, card).then((deck) => 
        dispatch(addCardSuccess(deck))
    )
}

export function addDeckSuccess (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export const addDeck = (deck) => (dispatch) => {
    api.addCard(card, deckId).then((deck) => 
        dispatch(addCardSuccess(deck))
    )
}

export const retrieveDecksSuccess = (decks) => (
    {
        type: RECEIVE_DECKS,
        decks
    }
);

export const retrieveDecks = () => (dispatch) => {
    dispatch(isLoading(true));
    api.getDecks().then((decks) => {
        dispatch(isLoading(false));
        dispatch(retrieveDecksSuccess(decks))
    })
};

export const retrieveDeckDetailSuccess = (deck) => (
    {
        type: RECEIVE_DECK_DETAIL,
        deck
    }
);

export const retrieveDeckDetail = (deckId) => (dispatch) => {
    dispatch(isLoading(true));
    api.getDeckById(deckId).then((deck) => {
        dispatch(isLoading(false));
        dispatch(retrieveDeckDetailSuccess(deck))
    });
}