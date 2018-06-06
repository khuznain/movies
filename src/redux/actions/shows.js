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
                    shows = _.map(res.data.results, _.partialRight(_.pick, ['id', 'title', 'vote_average', 'vote_count', 'release_date', 'poster_path', 'overview']));
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
                    shows = _.map(res.data.results, _.partialRight(_.pick, ['id', 'title', 'vote_average', 'vote_count', 'release_date', 'poster_path', 'overview']));
                }
                    dispatch(loadMoreShowsSuccess(shows));
                }
                
            )
            .catch(err => {
                // To do 
                console.log(err);
            });
    };
};