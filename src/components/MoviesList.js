import React from "react";

import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  function handleDeleteClick(id) {
    props.onDeleteMovie(id);
  }
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <li className={classes.movie}>
          <h2>{movie.title}</h2>
          <h3>{movie.releaseDate}</h3>
          <p>{movie.openingText}</p>
          <button onClick={() => handleDeleteClick(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
