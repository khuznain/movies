import * as actionTypes from './actionTypes';
import api from '../api';
import _ from 'lodash';

export const fetchShowsSuccess = (shows) => {
    return {
        type: actionTypes.FETCH_SHOWS_SUCCESS,
        shows
    };
};

export const fetchShowsFail = (error) => {
    return {
        type: actionTypes.FETCH_SHOWS_FAIL,
        error: error
    };
};

export const fetchShowsStart = () => {
    return { type: actionTypes.FETCH_SHOWS_START };
};

export const loadMoreShowsSuccess = (shows) => {
    return {
        type: actionTypes.LOADE_MORE_SHOWS_SUCCESS,
        shows
    };
};

export const fetchShows = (page) => {
    return dispatch => {
        dispatch(fetchShowsStart());
        api.show.fetchShows(page)
            .then(res => {
                let shows = [];
                if(res.status === 200) {
                    shows = _.map(res.data.results, _.partialRight(_.pick, ['id', 'title', 'name', 'vote_average', 'vote_count', 'release_date', 'poster_path', 'overview']));
                }
                    dispatch(fetchShowsSuccess(shows));
                }   
            ).catch(err => {
                dispatch(fetchShowsFail(err))
            });
    };
};

export const loadMoreShows = (page) => {
    return dispatch => {
        //To do
        // dispatch(loadMoreShowsStart());
        api.show.fetchShows(page)
            .then(res => {
                let shows = [];
                if(res.status === 200) {
                    shows = _.map(res.data.results, _.partialRight(_.pick, ['id', 'title', 'name', 'vote_average', 'vote_count', 'release_date', 'poster_path', 'overview']));
                }
                    dispatch(loadMoreShowsSuccess(shows));
                }   
            ).catch(err => {
                // To do 
                console.log(err);
            });
    };
};

export const fetchShowSuccess = (show) => {
    return {
        type: actionTypes.FETCH_SHOW_SUCCESS,
        show
    };
};

export const fetchShow = (id) => {
    return dispatch => {
        //To do
        // dispatch(fetchShowStart());
        api.show.fetchShow(id)
            .then(res => {
                console.log(res.data);
                let show = {};
                if(res.status === 200) {
                    show = _.pick(res.data, ['id', 'title', 'name', 'vote_average', 'created_by', 'vote_count', 'release_date', 'poster_path', 'overview']);
                }
                    dispatch(fetchShowSuccess(show));
                }
            ).catch(err => {
                //To do
                console.log(err);
            });
    };
};


export const fetchShowTrailerSuccess = (youtubeTrailers) => {
    return {
        type: actionTypes.FETCH_SHOW_TRAILERS_SUCCESS,
        youtubeTrailers
    };
};

export const fetchShowTrailer = (id) => {
    return dispatch => {
        //To do
        // dispatch(fetchShowTrailerStart());
        api.show.fetchShowTrailer(id)
            .then(res => {
                if(res.status === 200) {
                    let youtubeTrailers = res.data.results.filter(function(trailer) {
                        return trailer.site === 'YouTube';
                    });
                    // console.log(res.data);
                    dispatch(fetchShowTrailerSuccess(youtubeTrailers));
                } 
                }
            ).catch(err => {
                // To do
                console.log(err);
            });
    };
};