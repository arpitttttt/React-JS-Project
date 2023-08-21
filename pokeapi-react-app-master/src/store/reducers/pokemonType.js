import { ADD_POKEMON_TYPE } from '../constants/action-types';

// state: {
//   [pokemonTypeId]: PokemonType
// }
const pokemonType = (state = {}, action) => {
  switch (action.type) {
    case ADD_POKEMON_TYPE: {
      return {
        ...state,
        [action.pokemonType.id]: action.pokemonType
      };
    }
    default:
      return state;
  }
};

export default pokemonType;
