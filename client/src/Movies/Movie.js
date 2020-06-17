  
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

import MovieCard from './MovieCard'

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const { itemId } = useParams()

  useEffect(() => {
    const id = itemId;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[movie]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie} save={props.toSave} />
  );
}

export default Movie;
