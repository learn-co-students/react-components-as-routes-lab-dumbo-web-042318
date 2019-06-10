import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return <div>
          <h1>Name: {director.name}</h1>
          <h4>Movies</h4>
          <ul>
            {director.movies.map(movie=>{
              return <li>{movie}</li>
            })}
          </ul>
        </div>
      })}
    </div>
  );
}

export default Directors
