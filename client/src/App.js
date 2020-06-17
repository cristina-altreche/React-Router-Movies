import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (movie) => {
    const movieCheck = savedList.some((name) => name.title == movie.title);
    if (!movieCheck) setSavedList([...savedList, movie]);
  };

  console.log(savedList);
  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/movies/:itemId">
          <Movie details={movieList} toSave={addToSavedList} />
        </Route>

        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
