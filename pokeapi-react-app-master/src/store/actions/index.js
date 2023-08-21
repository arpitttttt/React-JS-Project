import axios from 'axios';
import {
  ADD_POKEMONS,
  ADD_POKEMON,
  ADD_POKEMON_TYPES,
  ADD_POKEMON_TYPE,
  ADD_FAVOURITES
} from '../constants/action-types';
import {
  getNumberOfPages,
  getFavouritesFromLocalStorage,
  saveFavouritesToLocalStorage
} from '../../helpers/functions';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = (page) => (dispatch, getState) => {
  // If data is already fetched then skip
  if (!getState().pokemons[page]) {
    const offset = (page - 1) * 20;
    return axios.get(`pokemon/?offset=${offset}`).then(({ data }) => {
      const numberOfPages = getNumberOfPages(data.count);

      dispatch({
        type: ADD_POKEMONS,
        pokemons: data.results,
        numberOfPages,
        page
      });
    }).catch((err) => err);
  }

  return Promise.resolve();
};

export const fetchPokemon = (id) => (dispatch, getState) => {
  // If data is already fetched then skip
  if (!getState().pokemon[id]) {
    return axios.get(`pokemon/${id}`).then(({ data }) => {
      dispatch({
        type: ADD_POKEMON,
        pokemon: data
      });
    }).catch((err) => err);
  }

  return Promise.resolve();
};

export const fetchPokemonTypes = () => (dispatch, getState) => {
  // If data is already fetched then skip
  if (!getState().pokemonTypes.length) {
    return axios.get('type/?limit=50').then(({ data }) => {
      dispatch({
        type: ADD_POKEMON_TYPES,
        pokemonTypes: data.results
      });
    }).catch((err) => err);
  }

  return Promise.resolve();
};

export const fetchPokemonType = (id) => (dispatch, getState) => {
  // If data is already fetched then skip
  if (!getState().pokemonType[id]) {
    return axios.get(`type/${id}`).then(({ data }) => {
      dispatch({
        type: ADD_POKEMON_TYPE,
        pokemonType: data
      });
    }).catch((err) => err);
  }

  return Promise.resolve();
};

export const getFavourites = () => (dispatch, getState) => {
  // If data is already fetched then skip
  if (!getState().favourites.length) {
    const favourites = getFavouritesFromLocalStorage();

    dispatch({
      type: ADD_FAVOURITES,
      favourites
    });
  }
};

export const addFavourite = (pokemon) => (dispatch, getState) => {
  const favourites = [...getState().favourites, pokemon];
  favourites.sort((a, b) => a.id - b.id);
  saveFavouritesToLocalStorage(favourites);

  dispatch({
    type: ADD_FAVOURITES,
    favourites
  });
};

export const removeFavourite = (id) => (dispatch, getState) => {
  const favourites = getState().favourites.filter((pokemon) => pokemon.id !== id);
  saveFavouritesToLocalStorage(favourites);

  dispatch({
    type: ADD_FAVOURITES,
    favourites
  });
};
