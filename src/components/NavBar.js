import React from 'react';
import { NavLink } from 'react-router-dom';


const style = {
  background: 'darkblue',
  color: 'white',
  margin: '1em'
}

const NavBar = () => {
  return (
    <div className=".navbar">
      <NavLink to="/" style={style} >Home</NavLink>
      <NavLink to="/movies" style={style}>Movies</NavLink>
      <NavLink to="/directors" style={style}>Directors</NavLink>
      <NavLink to="/actors" style={style}>Actors</NavLink>
    </div>
  );
};

export default NavBar;

