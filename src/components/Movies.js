import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1> Movies Page </h1>

        {/*{code here}*/
        movies.map((movie, index) =>{
            return(
              <div key={index}>
              <h1>{movie.title}</h1>
              <h3>{movie.time}</h3>
            <ul>
              {
                movie.genres.map((genre, index) =>{
                  return(
                    <li key={index}>{genre}</li>
                  )
                })
              }
            </ul>
            </div>
            )
        })
      }
    </div>
  );
};

export default Movies;
