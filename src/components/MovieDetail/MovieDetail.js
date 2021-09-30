import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchMovieDetail,removeSelectedMovie } from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const isLoading = useSelector((state) => state.movies.isLoading);

  useEffect(() => {
    dispatch(fetchMovieDetail(imdbID));
    return () => {
        dispatch(removeSelectedMovie());
    }
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
        {isLoading && <p>Loading...</p> }
        {!isLoading && <>
      <div className="section-left">
        <div className="movie-title">{selectedMovie.title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> :{" "}
            {selectedMovie.imbdRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
            {selectedMovie.imdbVotes}
          </span>
          <span>
            IMDB Rating <i className="fa fa-film"></i> : {selectedMovie.Runtime}
          </span>
          <span>
            IMDB Rating <i className="fa fa-calender"></i> :{" "}
            {selectedMovie.Year}
          </span>
        </div>
        <div className="movie-plot">{selectedMovie.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{selectedMovie.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{selectedMovie.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{selectedMovie.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{selectedMovie.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{selectedMovie.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      </div>
      </>}
        
    </div>
  );
}

export default MovieDetail;
