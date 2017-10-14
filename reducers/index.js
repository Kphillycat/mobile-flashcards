import { combineReducers } from 'redux';
import decks from './decks';
import deckDetails from './deckDetails';
import loadingStatus from './loadingStatus';

const rootReducer = combineReducers({
    decks,
    deckDetails,
    loadingStatus
});

export default rootReducer;

