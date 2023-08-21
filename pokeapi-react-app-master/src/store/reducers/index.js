import { combineReducers } from 'redux';
import pokemons from './pokemons';
import pokemonTypes from './pokemonTypes';
import favourites from './favourites';
import pokemon from './pokemon';
import pokemonType from './pokemonType';

const rootReducer = combineReducers({
  pokemons,
  pokemonTypes,
  pokemon,
  favourites,
  pokemonType
});

export default rootReducer;
