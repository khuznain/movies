import { combineReducers } from 'redux';
import moviesReducer from '../redux/reducers/movies';

const configureStore = combineReducers({
    movieStore: moviesReducer,
});

export default configureStore;