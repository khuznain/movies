import axios from 'axios';

const ROOT_URL = process.env.REACT_APP_ROOT_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default {
    movie: {
        fetchMovies: (page) => 
            axios.get(`${ROOT_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${ page || 1 }`),
        fetchMovie: (id) => 
            axios.get(`${ROOT_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`),
        fetchMovieCast: (id) => 
            axios.get(`${ROOT_URL}/movie/${id}/casts?api_key=${API_KEY}&language=en-US`),
        fetchTrailer: (id) => 
            axios.get(`${ROOT_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`),
    },
    show: {
        fetchShows: (page) => 
            axios.get(`${ROOT_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${ page || 1 }`),
        fetchShow: (id) => 
            axios.get(`${ROOT_URL}/Location/get?locationId=${id}&businessId=4`)
    },
}