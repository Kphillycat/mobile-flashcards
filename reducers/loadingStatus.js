import { IS_LOADING } from '../utils/constants';

function loadingStatus(state = {isFetching: false}, action) {
    switch(action.type) {
        case IS_LOADING: 
            return Object.assign({}, state, { isFetching: action.isFetching });
        default:
            return state;
    }
}

export default loadingStatus;