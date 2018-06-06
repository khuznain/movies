import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    movies: [],
    casts: [],
    trailers: [],
    movie: {},
    loading: false,
    errors: {}
};

const fetchMoviesStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchMoviesSuccess = (state, action) => {
    return updateObject(state, {
        movies: action.movies,
        loading: false
    });
};

const fetchMoviesFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const fetchMovieStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchMovieSuccess = (state, action) => {
    return updateObject(state, {
        movie: action.movie,
        loading: false
    });
};

const fetchMovieFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const fetchMovieCastStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchMovieCastSuccess = (state, action) => {
    return updateObject(state, {
        casts: action.casts,
        loading: false
    });
};

const fetchMovieCastFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const fetchTrailerStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchTrailerSuccess = (state, action) => {
    return updateObject(state, {
        trailers: action.youtubeTrailers,
        loading: false
    });
};

const fetchTrailerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_MOVIES_START:
            return fetchMoviesStart(state, action);
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return fetchMoviesSuccess(state, action);
        case actionTypes.FETCH_MOVIES_FAIL:
            return fetchMoviesFail(state, action);
        
        case actionTypes.FETCH_MOVIE_START:
            return fetchMovieStart(state, action);
        case actionTypes.FETCH_MOVIE_SUCCESS:
            return fetchMovieSuccess(state, action);
        case actionTypes.FETCH_MOVIE_FAIL:
            return fetchMovieFail(state, action);
        
        case actionTypes.FETCH_CASTS_START:
            return fetchMovieCastStart(state, action);
        case actionTypes.FETCH_CASTS_SUCCESS:
            return fetchMovieCastSuccess(state, action);
        case actionTypes.FETCH_CASTS_FAIL:
            return fetchMovieCastFail(state, action);
        
        case actionTypes.FETCH_TRAILERS_START:
            return fetchTrailerStart(state, action);
        case actionTypes.FETCH_TRAILERS_SUCCESS:
            return fetchTrailerSuccess(state, action);
        case actionTypes.FETCH_TRAILERS_FAIL:
            return fetchTrailerFail(state, action);

        case actionTypes.LOADE_MORE_MOVIES_SUCCESS:
            return { 
                ...state,
                movies: state.movies.concat(action.movies)
            }
        default:
            return state;
    }
}

export default reducer;