import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return <div>
            <h1>Name: {movie.title}</h1>
            <h4>Time: {movie.time}</h4>
            <h4>Genres:</h4>
            <ul>
              {movie.genres.map(genre => {
                return <li>{genre}</li>
              })}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
