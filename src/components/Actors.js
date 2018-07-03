import React from 'react';
import { actors } from '../data';

const ActorCard = (props) => {
  const {name, movies} = props.actor

  return (
    <div>
      <h1>{name}</h1>
      <ul>{movies.map(movie => <li key={movies.indexOf(movie)}>{movie}</li> )}</ul>
    </div>
  );
};

const Actors = () => {
  return actors.map( actor => < ActorCard key={actors.indexOf(actor)} actor={actor} />)
};

export default Actors;
