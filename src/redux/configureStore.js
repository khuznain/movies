import { combineReducers } from 'redux';
import moviesReducer from '../redux/reducers/movies';

const configureStore = combineReducers({
    movies: moviesReducer,
});

export default configureStore;