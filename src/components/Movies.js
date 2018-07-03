import React from 'react';
import { movies } from '../data';

const Movies =() =>{
  return movies.map(movie => < MovieCard key={movies.indexOf(movie)} movie={movie}/>)
}

const MovieCard = (props) => {
  const {title, time, genres, metascore} = props.movie
  const genreList = genres.map( genre => <li key={genres.indexOf(genre)}>{genre}</li>)

  return (
    <div className="card">
        <h3>{title}</h3>
        <p>{time}</p>
        <p>{metascore}</p>
        <ul>{genreList}</ul>
    </div>
  );
};

export default Movies;
