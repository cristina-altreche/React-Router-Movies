import React, {useState, useEffect} from 'react';
import {Link, useRouteMatch} from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList = props => {
  const { movies } = props

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { url } = useRouteMatch()
 

  return (
    <Link to={`${url}movies/${movie.id}`}>
     <MovieCard movie={movie} />
    </Link>
  );
}

export default MovieList;
