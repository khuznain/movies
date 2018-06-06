import * as actionTypes from './actionTypes';
import api from '../api';
import _ from 'lodash';

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
                console.log(res.data.results);
                let movies = [];
                if(res.status === 200) {
                    movies = _.map(res.data.results, _.partialRight(_.pick, ['id', 'title', 'vote_average', 'vote_count', 'release_date', 'poster_path', 'overview']));
                }
                    dispatch(fetchMoviesSuccess(movies));
                }
                
            )
            .catch(err => {
                dispatch(fetchMoviesFail(err))
            });
    };
};