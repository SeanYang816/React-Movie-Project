import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {}
}

const movieSlice = createSlice({
    name:'movies',
    initialState: initialState,
    reducers:{
        addMovies:(state, action) =>{
            state.movies = action.payload;
        }
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies // get the name of our slice and the property
export default movieSlice.reducer;