import React from 'react';
import {  useHistory, NavLink, useRouteMatch } from 'react-router-dom';


const SavedList = props => {
  const history = useHistory()
  const { url } = useRouteMatch()

  const homeButton = () => {
    history.push('/')
  }


return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`${url}movies/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span></NavLink>
    ))}
       <div className="home-button" onClick={homeButton}>Home</div>
  </div>
)};

export default SavedList;
