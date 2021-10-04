import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux';
import { addMovies, fetchMovies,fetchShows } from '../../features/movies/movieSlice';

function Home() {
    const dispatch = useDispatch()
    const movieText = "marvel"

    useEffect(() => {
        dispatch(fetchMovies(movieText));
        dispatch(fetchShows(movieText));
    }, [dispatch])


    return (
        <div className="banner-img">
            <MovieListing />
        </div>
    )
}

export default Home
