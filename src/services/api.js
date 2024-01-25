import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'ec2e434cc9bc9d3a38f01279780f56eb';

const ENDPOINTS = {
    POPULAR: '/trending/movie/day',
    SEARCHWORD: '/search/search-movies',
    MOVIE: '/movie',
    CAST: '/credits',
    REVIEWS: '/reviews',
}

export function getPopularMovies() {
    return axios.get(`${ENDPOINTS.POPULAR}?api_key=${API_KEY}`)
        .then(response => response.data);
}

export const getMovieDetails = async id => {
    return axios.get(`${ENDPOINTS.MOVIE}/${id}?api_key=${API_KEY}`)
    .then(response=> response.data)
}

export const getMovieCasts = async id => {
    return axios.get(`${ENDPOINTS.MOVIE}/${id}${ENDPOINTS.CAST}?api_key=${API_KEY}`)
    .then(response => response.data)
}

export const getMovieReviews = async id => {
    return axios.get(`${ENDPOINTS.MOVIE}/${id}${ENDPOINTS.REVIEWS}?api_key=${API_KEY}`)
     .then(response => response.data)
}

