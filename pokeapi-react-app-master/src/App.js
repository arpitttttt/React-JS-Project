import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Pokemons from './views/Pokemons';
import PokemonTypes from './views/PokemonTypes';
import Favourites from './views/Favourites';
import Pokemon from './views/Pokemon';
import PokemonType from './views/PokemonType';
import './App.scss';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/">
        <Redirect to="/pokemons?page=1" />
      </Route>
      <Route path="/pokemons" component={Pokemons} />
      <Route path="/types" component={PokemonTypes} />
      <Route path="/favourites" component={Favourites} />
      <Route path="/pokemon/:id" component={Pokemon} />
      <Route path="/type/:id" component={PokemonType} />
    </HashRouter>
  );
}

export default App;
