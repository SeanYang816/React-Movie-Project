import { APIKey } from '../../common/apis/MovieApiKey'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'http://www.omdbapi.com/';
const movieText = 'harry'
const initialState = {
    movies: {},
    shows: {},
    selectedMovie: {},
    isLoading: false,
    hasError: false,
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async ( _, {dispatch , getState} ) => {
        const response = await fetch(`${BASE_URL}?apiKey=${APIKey}&s=${movieText}&type=movie`)
        const json =  await response.json();
        console.log("THE response from API", json)
        return json
    }
)

export const fetchShows = createAsyncThunk(
    'movies/fetchShows',
    async ( _, {dispatch , getState} ) => {
        const response = await fetch(`${BASE_URL}?apiKey=${APIKey}&s=${movieText}&type=series`)
        const json =  await response.json();
        console.log("THE response from API", json)
        return json
    }
)

export const fetchMovieDetail = createAsyncThunk(
    'movies/fetchMovieDetail',
    async ( id, {dispatch , getState} ) => {
        const response = await fetch(`${BASE_URL}?apiKey=${APIKey}&i=${id}&Plot=full`)
        console.log(`${BASE_URL}?apiKey=${APIKey}&i=${id}&Plot=full`)
        const json =  await response.json();
        console.log("THE response from API", json)
        return json
    }
)


const movieSlice = createSlice({
    name:'movies',
    initialState: initialState,
    reducers:{
        addMovies:(state, action) =>{
            state.movies = action.payload;
        },
        removeSelectedMovie: (state) => {
            state.selectedMovie = {}
        }
    },
    extraReducers:{
        [fetchMovies.pending]:(state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchMovies.fulfilled]:(state, action) => {
            state.movies = action.payload
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchMovies.rejected]:(state, action) => {
            console.log('rejected')
            state.isLoading = false;
            state.hasError = true;
        },
        [fetchShows.pending]:(state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchShows.fulfilled]:(state, action) => {
            state.shows = action.payload
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchShows.rejected]:(state, action) => {
            console.log('rejected')
            state.isLoading = false;
            state.hasError = true;
        },
        [fetchMovieDetail.pending]:(state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchMovieDetail.fulfilled]:(state, action) => {
            state.selectedMovie = action.payload
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchMovieDetail.rejected]:(state, action) => {
            console.log('rejected')
            state.isLoading = false;
            state.hasError = true;
        },
    }
})

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies // get the name of our slice and the property
export default movieSlice.reducer;