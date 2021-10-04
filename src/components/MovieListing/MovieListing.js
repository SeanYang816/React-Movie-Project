import React from 'react'
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"

function MovieListing() {
    const movies = useSelector(state => state.movies.movies)
    const shows = useSelector(state => state.movies.shows)
    let renderMovies, renderShows = "";

    renderMovies = movies.Response === 'True' ?
        (movies.Search.map((movie, index) => {
           return <MovieCard key={index} data={movie} />
        }))
        : (<div className="movies-error"><h3>{movies.Error}</h3></div>)

    renderShows = shows.Response === 'True' ?
    (shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />
    }))
    : (<div className="shows-error"><h3>{shows.Error}</h3></div>)


    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {renderShows}
                </div>
            </div>
        </div>
    )
}

export default MovieListing
