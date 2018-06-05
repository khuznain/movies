import axios from 'axios';

const ROOT_URL = process.env.REACT_APP_ROOT_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default {
    movie: {
        fetchMovies: (page) => 
            axios.get(`${ROOT_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${ page || 1 }`),
        fetchMovie: (_id) => 
            axios.get(`${ROOT_URL}/Location/get?locationId=${_id}&businessId=4`)
    },
    show: {
        fetchShows: (page) => 
            axios.get(`${ROOT_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${ page || 1 }`),
        fetchShow: (_id) => 
            axios.get(`${ROOT_URL}/Location/get?locationId=${_id}&businessId=4`)
    },
}