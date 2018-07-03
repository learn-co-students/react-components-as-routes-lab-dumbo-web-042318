import React from 'react';
import { directors } from '../data';

const DirectorCard = (props) => {
  const {name, movies} = props.director

  return (
    <div>
      <h3>{name}</h3>
      <ul>{movies.map(movie => <li>{movie}</li> )}</ul>
    </div>
  );
}

const Directors = () => {
  return directors.map( director => < DirectorCard key={directors.indexOf(director)} director={director} />) 
}

export default Directors
