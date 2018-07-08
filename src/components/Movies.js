import React from 'react';
import { movies } from '../data';

const Movies = () => {
  // I didn't wanna make a card 
  return (
    <div> 
      <h1>Movies Page</h1>
      {movies
        .map(movie => {
          return (
            <div key={movie.title}>
              <h2>{movie.title}</h2>
              <p>time: {movie.time}</p>
              <p>metasciore: {movie.metascore}</p>
              {movie.genres
                .map(genre => <li key={`${movie.title}-${genre}`}>{genre}</li> )

              }
            </div>
          )
        })
      }
    </div>
  )
};

export default Movies;

  // {
  //   title: 'Doctor Strange',
  //   time: 115,
  //   genres: ['Action', 'Adventure', 'Fantasy'],
  //   metascore: 74
  // },
