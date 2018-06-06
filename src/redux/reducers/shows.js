import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    shows: [],
    loading: false,
    errors: {}
};

const fetchShowsStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchShowsSuccess = (state, action) => {
    return updateObject(state, {
        shows: action.shows,
        loading: false
    });
};

const fetchShowsFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_SHOWS_START:
            return fetchShowsStart(state, action);
        case actionTypes.FETCH_SHOWS_SUCCESS:
            return fetchShowsSuccess(state, action);
        case actionTypes.FETCH_SHOWS_FAIL:
            return fetchShowsFail(state, action);

        case actionTypes.LOADE_MORE_SHOWS_SUCCESS:
            return { 
                ...state,
                shows: state.shows.concat(action.shows)
            }
        default:
            return state;
    }
}

export default reducer;