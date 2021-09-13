import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

function Home() {
    const dispatch = useDispatch()
    const BASE_URL = 'http://www.omdbapi.com/';
    const movieText = 'Harry'

    useEffect(() => {

        const fetchMovies = async () => {
            const response = await fetch(`${BASE_URL}?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err)=> { console.log("Err :", err) })
            const json =  await response.json();
            console.log("THE response from API", json)
            dispatch(addMovies(json))
            return json
        }
        fetchMovies();

    }, [])


    return (
        <div className="banner-img">
            <MovieListing />
        </div>
    )
}

export default Home
