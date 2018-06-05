import * as actionTypes from './actionTypes';
import api from '../api';

export const fetchMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        movies
    };
};

export const fetchMoviesFail = (error) => {
    return {
        type: actionTypes.FETCH_MOVIES_FAIL,
        error: error};
};

export const fetchMoviesStart = () => {
    return { type: actionTypes.FETCH_MOVIES_START };
};

export const fetchMovies = (page) => {
    return dispatch => {
        dispatch(fetchMoviesStart());
        api.movie.fetchMovies(page)
            .then(res => {
                console.log(res);
                    //dispatch(fetchMoviesSuccess());
                }
            )
            .catch(err => {
                //dispatch(fetchMoviesFail(err))
            });
    };
};