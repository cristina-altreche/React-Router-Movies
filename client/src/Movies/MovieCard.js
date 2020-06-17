import React from "react";

const MovieCard = (props) => {
  const {movie, save } = props
  const { title, director, metascore, stars } = movie;

  const saveMovie = () => {
    const addToSavedList = props.save;
    addToSavedList(movie)
  }

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map((star) => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      {save ? (
        <div className="save-button" onClick={saveMovie}>
          Save
        </div>
      ) : null}
    </div>
  );
};

export default MovieCard;
