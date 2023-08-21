import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import pokemons from '../assets/pokemons.png';
import types from '../assets/types.png';
import favourites from '../assets/favourites.png';
import './Navigation.scss';

function Navigation() {
  return (
    <aside>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Home" />
      </NavLink>
      <nav>
        <NavLink to="/pokemons?page=1">
          <img src={pokemons} alt="Pokemons" />
          <p>Pokemons</p>
        </NavLink>
        <NavLink to="/types">
          <img src={types} alt="Types" />
          <p>Types</p>
        </NavLink>
        <NavLink to="/favourites">
          <img src={favourites} alt="Favourites" />
          <p>Favourites</p>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Navigation;
