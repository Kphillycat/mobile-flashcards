import { RECEIVE_DECK_DETAIL } from '../utils/constants';

function deckDetails(state = {}, action) {
    switch(action.type){
        case RECEIVE_DECK_DETAIL:
            return {
                ...state,
                ...action.deck
            }
        default:
            return state
    }
}

export default deckDetails;