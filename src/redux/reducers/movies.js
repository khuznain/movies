import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: [],
    loading: false,
    errors: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}

export default reducer;