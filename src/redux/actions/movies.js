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

export const loadMoreMoviesSuccess = (movies) => {
    return {
        type: actionTypes.LOADE_MORE_MOVIES_SUCCESS,
        movies
    };
};

export const loadMoreMoviesFail = (error) => {
    return {
        type: actionTypes.LOADE_MORE_MOVIES_FAIL,
        error: error};
};

export const loadMoreMoviesStart = () => {
    return { type: actionTypes.LOADE_MORE_MOVIES_START };
};

export const fetchMovies = (page) => {
    return dispatch => {
        dispatch(fetchMoviesStart());
        api.movie.fetchMovies(page)
            .then(res => {
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

export const loadMore = (page) => {
    return dispatch => {
        dispatch(loadMoreMoviesStart());
        api.movie.fetchMovies(page)
            .then(res => {
                console.log(res.data.results);
                let movies = [];
                if(res.status === 200) {
                    movies = _.map(res.data.results, _.partialRight(_.pick, ['id', 'title', 'vote_average', 'vote_count', 'release_date', 'poster_path', 'overview']));
                }
                    dispatch(loadMoreMoviesSuccess(movies));
                }
                
            )
            .catch(err => {
                dispatch(loadMoreMoviesFail(err))
            });
    };
};

export const fetchMovieSuccess = (movie) => {
    return {
        type: actionTypes.FETCH_MOVIE_SUCCESS,
        movie
    };
};

export const fetchMovieFail = (error) => {
    return {
        type: actionTypes.FETCH_MOVIE_FAIL,
        error: error
    };
};

export const fetchMovieStart = () => {
    return { type: actionTypes.FETCH_MOVIE_START };
};

export const fetchMovie = (id) => {
    return dispatch => {
        dispatch(fetchMovieStart());
        api.movie.fetchMovie(id)
            .then(res => {
                let movie = {};
                if(res.status === 200) {
                    movie = _.pick(res.data, ['id', 'title', 'vote_average', 'vote_count', 'release_date', 'poster_path', 'overview']);
                }
                    dispatch(fetchMovieSuccess(movie));
                }
                
            )
            .catch(err => {
                dispatch(fetchMovieFail(err))
            });
    };
};

export const fetchMovieCastSuccess = (casts) => {
    return {
        type: actionTypes.FETCH_CASTS_SUCCESS,
        casts
    };
};

export const fetchMovieCastFail = (error) => {
    return {
        type: actionTypes.FETCH_CASTS_FAIL,
        error: error
    };
};

export const fetchMovieCastStart = () => {
    return { type: actionTypes.FETCH_CASTS_START };
};

export const fetchMovieCast = (id) => {
    return dispatch => {
        dispatch(fetchMovieCastStart());
        api.movie.fetchMovieCast(id)
            .then(res => {
                let casts = [];
                if(res.status === 200) {
                    casts = _.map(res.data.cast, _.partialRight(_.pick, ['cast_id', 'profile_path', 'name']));
                } 
                    dispatch(fetchMovieCastSuccess(casts));
                }
            ).catch(err => {
                dispatch(fetchMovieCastFail(err))
            });
    };
};

export const fetchTrailerSuccess = (youtubeTrailers) => {
    return {
        type: actionTypes.FETCH_TRAILERS_SUCCESS,
        youtubeTrailers
    };
};

export const fetchTrailerFail = (error) => {
    return {
        type: actionTypes.FETCH_TRAILERS_FAIL,
        error: error
    };
};

export const fetchTrailerStart = () => {
    return { type: actionTypes.FETCH_TRAILERS_START };
};

export const fetchTrailer = (id) => {
    return dispatch => {
        dispatch(fetchTrailerStart());
        api.movie.fetchTrailer(id)
            .then(res => {
                if(res.status === 200) {
                    let youtubeTrailers = res.data.results.filter(function(trailer) {
                        return trailer.site === 'YouTube';
                    });
                    // console.log(res.data);
                    dispatch(fetchTrailerSuccess(youtubeTrailers));
                } 
                }
            ).catch(err => {
                dispatch(fetchTrailerFail(err))
            });
    };
};