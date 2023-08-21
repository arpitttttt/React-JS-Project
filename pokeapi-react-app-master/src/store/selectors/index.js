import { createSelector } from 'reselect';

const getPokemonType = (state, props) => state.pokemonType[props.match.params.id];

export const isFavourite = (state, props) => (
  state.favourites.some((pokemon) => pokemon.id === props.pokemon.id)
);

export const getPokemonsByType = createSelector(
  [getPokemonType],
  (pokemonType) => {
    if (pokemonType) {
      return pokemonType.pokemon.map((data) => data.pokemon);
    }

    return [];
  }
);
