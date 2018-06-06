import { combineReducers } from 'redux';
import moviesReducer from '../redux/reducers/movies';
import showsReducer from '../redux/reducers/shows';

const configureStore = combineReducers({
    movieStore: moviesReducer,
    showStore: showsReducer,
});

export default configureStore;